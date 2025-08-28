import useGenres from "@/hooks/useGenres";
import { List, ListItem } from "@chakra-ui/react";

const Sidebar = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <List.Root w={"120px"}>
      {genres.map((g) => (
        <List.Item key={g.id}>{g.name}</List.Item>
      ))}
    </List.Root>
  );
};

export default Sidebar;
