import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
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
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponce>("games")
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
  }, []);
  return { games, error };
};
export default useGames;
