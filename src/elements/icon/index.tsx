import { FC, memo } from "react";
import { Image } from "./styles";

interface IconProps {
  path: string;
  alt?: string;
}

const Icon: FC<IconProps> = ({ path, alt = '' }) => {
  return (
    <Image src={path} alt={alt} />
  );
};

export default memo(Icon);
