import type { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";
interface Props {
  gameQuery: GameQuery;
}
const GamesHeading = ({ gameQuery }: Props) => {
  const headingText = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading size={"7xl"} fontWeight={"bold"} py={4}>
      {headingText}
    </Heading>
  );
};

export default GamesHeading;
