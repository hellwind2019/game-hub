import getCroppedImageUrl from "@/services/image-url";
import { Button, Heading, HStack, Image, List, Text } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";
import { startTransition } from "react";
import useGenres, { type Genre } from "@/hooks/useGenres.ts";

interface Props {
  onSelect: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelect, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {" "}
      <Heading py={4} size={"2xl"}>
        Genres
      </Heading>
      <List.Root w={"120px"} as={"ul"} listStyleType={"none"}>
        {error && <Text color={"red.500"}>{error}</Text>}

        {isLoading
          ? skeletons.map((s) => <GenreSkeleton key={s} />)
          : data.map((g) => (
              <List.Item key={g.id} padding={1.5}>
                <HStack gap={2}>
                  <Image
                    height={"50px"}
                    fit={"cover"}
                    aspectRatio={"1/1"}
                    borderRadius={10}
                    src={getCroppedImageUrl(g.image_background)}
                  />
                  <Button
                    // overflow={"hidden"}
                    width={"100%"}
                    justifyContent={"start"}
                    whiteSpace={"normal"}
                    fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
                    onClick={() => {
                      startTransition(() => {
                        if (g.id === 0) {
                          onSelect(null);
                          return;
                        }
                        onSelect(g);
                      });
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
    </>
  );
};

export default GenreList;
