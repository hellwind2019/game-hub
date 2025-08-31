import type { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import { Button, HStack, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatfrom: (platform: Platform | null) => void;
}
const PlatformSelector = ({ onSelectPlatfrom, selectedPlatform }: Props) => {
  const { data } = usePlatforms();
  return (
    <Menu.Root>
      <Menu.Trigger>
        <HStack>
          <Button variant={"outline"}>
            {selectedPlatform?.name || "All Platforms"}
            <BsChevronDown />
          </Button>
        </HStack>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item
              onClick={() => {
                onSelectPlatfrom(null);
              }}
              value="null"
            >
              All Platforms
            </Menu.Item>
            {data.map((platform) => (
              <Menu.Item
                onClick={() => {
                  onSelectPlatfrom(platform);
                }}
                key={platform.id}
                value={String(platform.id)}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
