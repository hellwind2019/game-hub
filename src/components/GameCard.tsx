import type { Game } from "@/hooks/useGames";
import { Button, Card, Image, Text } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

import { PlatformIconsList } from "./PlatformIconList";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt="Green double couch with wooden legs"
        aspectRatio={16 / 9}
      />
      <Card.Body gap="2">
        <Card.Title>
          <Text textStyle="3xl">{game.name}</Text>
        </Card.Title>

        <Card.Description>
          <PlatformIconsList platforms={game.parent_platforms} />
        </Card.Description>
      </Card.Body>
      <Card.Footer gap="2">
        <Button size="xs" variant={"outline"}>
          <FiPlus />
          {game.added}
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};
export default GameCard;
