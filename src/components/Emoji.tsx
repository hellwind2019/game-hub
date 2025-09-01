import meh from "../assets/Emojis/meh.webp";
import bulls_eye from "../assets/Emojis/bulls-eye.webp";
import thumbs_up from "../assets/Emojis/thumbs-up.webp";
import { Image, type ImageProps } from "@chakra-ui/react";
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: bulls_eye, alt: "recommended", boxSize: "35px" },
    5: { src: thumbs_up, alt: "exceptional", boxSize: "25px" },
  };
  return <Image {...emojiMap[rating]} mt={1} />;
};

export default Emoji;
