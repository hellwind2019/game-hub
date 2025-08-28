import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

import GameGrid from "./components/GameGrid";
import Sidebar from "./components/Sidebar";
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
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem hideBelow={"lg"} area={"aside"} padding={4}>
        <Sidebar onSelect={(genre) => setGenre(genre)} />
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid selectedGenre={genre} />
      </GridItem>
    </Grid>
  );
}

export default App;
