import useData from "./useData";
import type { GameQuery } from "@/App";
export interface Game {
  id: number;
  name: string;
  background_image: string;
  added: number;
  parent_platforms: { platform: Platform }[];
}
export interface Platform {
  id: number;
  name: string;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchQ,
      },
    },
    [gameQuery]
  );

export default useGames;
