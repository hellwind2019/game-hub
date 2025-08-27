import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import { Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <SimpleGrid padding={4} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={2}>
      {error && <Text color={"red.400"}>{error}</Text>}
      {games.map((game) => (
        <GridItem>
          <GameCard game={game} />
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
