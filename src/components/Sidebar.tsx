import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Button, HStack, Image, List, Text } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";
import { startTransition } from "react";

interface Props {
  onSelect: (genre: Genre) => void;
}

const Sidebar = ({ onSelect }: Props) => {
  const { genres, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <List.Root w={"120px"} as={"ul"} listStyleType={"none"}>
      {isLoading && skeletons.map((s) => <GenreSkeleton key={s} />)}
      {error && <Text color={"red.500"}>{error}</Text>}
      {genres.map((g) => (
        <List.Item key={g.id} padding={1}>
          <HStack gap={2}>
            <Image
              height={"50px"}
              fit={"cover"}
              aspectRatio={"1/1"}
              borderRadius={10}
              src={getCroppedImageUrl(g.image_background)}
            />
            <Button
              onClick={() => {
                startTransition(() => {
                  onSelect(g);
                });
                console.log("Clicked");
                console.time("Genre click");
              }}
              variant={"plain"}
              textStyle={"lg"}
            >
              {g.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default Sidebar;
