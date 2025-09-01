import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GamesHeading from "./components/GamesHeading";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchQ: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearchChange={(searchQ) => setGameQuery({ ...gameQuery, searchQ })}
        />
      </GridItem>
      <GridItem hideBelow={"lg"} area={"aside"} padding={4}>
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelect={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>
      <GridItem area={"main"}>
        <Box pl={4} py={2}>
          <GamesHeading gameQuery={gameQuery} />
          <HStack>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatfrom={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(order) => {
                setGameQuery({ ...gameQuery, sortOrder: order });
              }}
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
