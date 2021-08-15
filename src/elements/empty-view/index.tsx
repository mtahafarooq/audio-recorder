import { FC, memo } from "react";
import { EmptyViewMessage } from "./styles";

interface EmptyViewProps {
  message: string;
}

const EmptyView: FC<EmptyViewProps> = ({ message }) => {
  return (
    <EmptyViewMessage>{ message }</EmptyViewMessage>
  );
};

export default memo(EmptyView);

