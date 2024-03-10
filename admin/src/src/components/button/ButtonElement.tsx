import { CSSProperties, FC, MouseEventHandler, ReactNode } from "react";
import { Button } from "antd";

interface IButtonProps {
  text: string;
  onClick?: MouseEventHandler<HTMLElement> | undefined;
  icon?: ReactNode;
  style?: CSSProperties;
  htmlType?: string;
  className?: string;
  type?: "text" | "link" | "default" | "primary" | "dashed";
}

const ButtonElement: FC<IButtonProps> = ({
  text,
  icon,
  style,
  type,
  onClick,
  className,
}) => {
  return (
    <Button
      className={className}
      type={type}
      style={style}
      icon={icon}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ButtonElement;
