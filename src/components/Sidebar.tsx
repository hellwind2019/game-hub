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

const Sidebar = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <List.Root w={"120px"} as={"ul"} listStyleType={"none"}>
      {error && <p>{error}</p>}
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
