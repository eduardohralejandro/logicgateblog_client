import { CSSProperties, FC, ReactNode } from "react";
import { Button } from "antd";

interface IButtonProps {
  text?: string;
  icon?: ReactNode;
  style?: CSSProperties;
  type?: "text" | "link" | "default" | "primary" | "dashed";
}

const ButtonElement: FC<IButtonProps> = ({ text, icon, style, type }) => {
  return (
    <Button type={type} style={style} icon={icon}>
      {text}
    </Button>
  );
};

export default ButtonElement;
