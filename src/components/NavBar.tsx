import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image src={logo} boxSize={"60px"}></Image>
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
