import { useState, MouseEvent } from "react";

const useModalState = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = (event: MouseEvent<HTMLElement>) => {
    console.log(event);
    setOpen(false);
  };

  const handleCancel = (event: MouseEvent<HTMLElement>) => {
    console.log(event);
    setOpen(false);
  };

  return {
    open,
    showModal,
    handleOk,
    handleCancel,
  };
};

export default useModalState;
