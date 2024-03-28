import { FC } from "react";
import { Typography } from "antd";
import { HeaderSize } from "../../enums/enums";

const { Title } = Typography;

interface IHeaderElementProps {
  title: string;
  level: HeaderSize;
  className?: string;
}

const HeaderElement: FC<IHeaderElementProps> = ({
  title,
  level,
  className,
}) => {
  return (
    <>
      <Title className={className} level={level}>
        {title}
      </Title>
    </>
  );
};

export default HeaderElement;
