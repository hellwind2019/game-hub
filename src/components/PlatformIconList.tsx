import { HStack, Icon } from "@chakra-ui/react";
import type { PlatformName } from "./PlatformIcon";
import PlatformIcons from "./PlatformIcon";

interface PlatformIconsListProps {
  platforms: { platform: { id: number; name: string } }[];
}

export function PlatformIconsList({ platforms }: PlatformIconsListProps) {
  return (
    <HStack>
      {platforms.map((pl) => {
        const name = pl.platform.name as PlatformName;
        const IconComponent = PlatformIcons[name];
        return (
          <Icon
            key={pl.platform.id}
            as={IconComponent}
            boxSize={5} // 🔧 size of all icons
            color="whiteAlpha.800" // 🔧 common color
          />
        );
      })}
    </HStack>
  );
}
