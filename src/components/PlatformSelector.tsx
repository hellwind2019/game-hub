import usePlatforms from "@/hooks/usePlatforms";
import { Button, HStack, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  return (
    <Menu.Root>
      <Menu.Trigger>
        <HStack>
          <Button variant={"outline"}>
            Platforms
            <BsChevronDown />
          </Button>
        </HStack>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <Menu.Item value={String(platform.id)}>{platform.name}</Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
