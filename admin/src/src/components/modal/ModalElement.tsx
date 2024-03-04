import { CSSProperties, FC, MouseEvent, ReactNode } from "react";
import { Modal } from "antd";

interface IModalProps {
  children: ReactNode;
  open: boolean;
  title: string;
  handleOk: (event: MouseEvent<HTMLElement>) => void;
  handleCancel: (event: MouseEvent<HTMLElement>) => void;
  style?: CSSProperties;
  width?: string;
  height?: string;
  footer?: ReactNode;
}

const ModalElement: FC<IModalProps> = ({
  children,
  open,
  handleOk,
  handleCancel,
  title,
  footer,
}) => {
  return (
    <>
      <Modal
        title={title}
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={footer}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalElement;
