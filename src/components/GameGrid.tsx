import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import { Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <SimpleGrid padding={4} columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={5}>
      {error && <Text color={"red.400"}>{error}</Text>}
      {isLoading &&
        skeletons.map((s) => (
          <GameCardContainer>
            <GameCardSkeleton key={s} />
          </GameCardContainer>
        ))}
      {games.map((game) => (
        <GridItem key={game.id}>
          <GameCardContainer>
            <GameCard game={game} />
          </GameCardContainer>
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
