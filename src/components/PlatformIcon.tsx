import type { IconType } from "react-icons";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaChrome,
} from "react-icons/fa";
import { SiNintendo, SiSega, SiAtari, SiCommodore } from "react-icons/si";

export type PlatformName =
  | "PC"
  | "PlayStation"
  | "Xbox"
  | "iOS"
  | "Android"
  | "Apple Macintosh"
  | "Linux"
  | "Nintendo"
  | "Atari"
  | "Commodore / Amiga"
  | "SEGA"
  | "3DO"
  | "Neo Geo"
  | "Web";

const platformIcons: Record<PlatformName, IconType> = {
  PC: FaWindows,
  PlayStation: FaPlaystation,
  Xbox: FaXbox,
  iOS: FaApple,
  Android: FaAndroid,
  "Apple Macintosh": FaApple,
  Linux: FaLinux,
  Nintendo: SiNintendo,
  Atari: SiAtari,
  "Commodore / Amiga": SiCommodore,
  SEGA: SiSega,
  "3DO": FaWindows, // fallback (choose something generic)
  "Neo Geo": FaWindows, // fallback
  Web: FaChrome,
};

export default platformIcons;
