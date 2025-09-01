import useGames, { type Game } from "@/hooks/useGames.ts";
import GameCard from "./GameCard";
import { GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "@/App";
interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <SimpleGrid padding={4} columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={5}>
      {error && <Text color={"red.400"}>{error}</Text>}
      {isLoading
        ? skeletons.map((s) => (
            <GameCardContainer key={s}>
              <GameCardSkeleton key={s} />
            </GameCardContainer>
          ))
        : data.map((game: Game) => (
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
