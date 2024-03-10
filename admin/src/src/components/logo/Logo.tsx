import { FC } from "react";

interface ILogoProps {
  className?: string;
}
const Logo: FC<ILogoProps> = ({ className }) => (
  <div className={className}>
    <img src="./logo.png" alt="logo_logicgate_blog" />
  </div>
);

export default Logo;
