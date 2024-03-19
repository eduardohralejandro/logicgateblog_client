import { Input } from "antd";
import { ChangeEvent, FC } from "react";

interface IInputProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
const InputElement: FC<IInputProps> = ({ value, onChange }) => {
  return (
    <>
      <Input value={value} onChange={onChange} />
    </>
  );
};

export default InputElement;
