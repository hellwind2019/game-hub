import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import type { Genre } from "./useGenres";
export interface Game {
  id: number;
  name: string;
  background_image: string;
  added: number;
  parent_platforms: ParentPlatforms[];
}
export interface ParentPlatforms {
  platform: Platform;
}
export interface Platform {
  id: number;
  name: string;
}
interface FetchGamesResponce {
  count: number;
  results: Game[];
}
const useGames = (selectedGenre: Genre | null) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGamesResponce>("/games", {
        params: {
          genres: selectedGenre?.id,
        },
        signal: controller.signal,
      })
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, [selectedGenre?.id]);
  return { games, error, isLoading };
};
export default useGames;
