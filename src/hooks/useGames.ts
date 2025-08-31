import type { Genre } from "./useGenres";
import useData from "./useData";
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

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "games",
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
