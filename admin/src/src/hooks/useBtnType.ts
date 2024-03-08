import { BtnType } from "../enums/enums";

const useBtnType = (type: BtnType): { type: BtnType } => {
  return { type: type || BtnType.DEFAULT };
};

export default useBtnType;