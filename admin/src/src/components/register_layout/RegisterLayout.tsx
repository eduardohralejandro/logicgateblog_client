import { Form } from "antd";
import { FormElement, Register } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  registerUserAsync,
  authSelect,
  setAuthenticated,
} from "../../features/auth/userRegisterSlice";
import { AppDispatch } from "../../app/store";
import IAuthor from "../../interfaces/author";

const RegisterLayout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector(authSelect);
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const onFinish = () => {
    const values: IAuthor = form.getFieldsValue();
    delete values.password2;
    dispatch(registerUserAsync({ ...values }));

    if (token !== undefined) {
      localStorage.setItem("token", token.token);
      dispatch(setAuthenticated(token));
      navigate("/articles");
      return <>Loading...</>; // TODO: Loader component
    }
  };
  const designProps = { labelCol: 6, wrapperCol: 8 };
  const customFormStyle = {
    width: "20rem",
    border: "1px solid #d1d1d1",
    padding: "1rem",
    borderRadius: "6px",
  };
  return (
    <>
      <FormElement
        form={form}
        onFinish={onFinish}
        {...designProps}
        style={customFormStyle}
        name="basic"
        layout="vertical"
        children={<Register />}
      />
    </>
  );
};

export default RegisterLayout;
