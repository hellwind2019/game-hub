import { Box, Grid, GridItem, Heading, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
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
        <NavBar />
      </GridItem>
      <GridItem hideBelow={"lg"} area={"aside"} padding={4}>
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelect={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>
      <GridItem area={"main"}>
        <Box pl={4} py={2}>
          <Heading size={"7xl"} fontWeight={"bold"} py={4}>
            {gameQuery.genre?.name || "New and Tranding"}
          </Heading>
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
