import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  HStack,
  Image,
  List,
  ListItem,
  SkeletonCircle,
  Text,
} from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";

const Sidebar = () => {
  const { genres, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <List.Root w={"120px"} as={"ul"} listStyleType={"none"}>
      {error && <p>{error}</p>}
      {isLoading && skeletons.map((s) => <GenreSkeleton />)}
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
            <Text textStyle={"lg"}>{g.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default Sidebar;
