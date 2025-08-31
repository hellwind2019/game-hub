import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";

function App() {
  const [genre, setGenre] = useState<Genre | null>(null);
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
        <GenreList onSelect={(genre) => setGenre(genre)} />
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid selectedGenre={genre} />
      </GridItem>
    </Grid>
  );
}

export default App;
