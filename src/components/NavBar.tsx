import { HStack, Image, Input, InputGroup } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
import { LuSearch } from "react-icons/lu";
interface Props {
  onSearchChange: (query: string) => void;
}

const NavBar = ({ onSearchChange }: Props) => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image src={logo} boxSize={"60px"}></Image>
      <InputGroup startElement={<LuSearch />}>
        <Input
          onChange={(event) => {
            onSearchChange(event.target.value);
          }}
          placeholder="Search games..."
        />
      </InputGroup>
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
