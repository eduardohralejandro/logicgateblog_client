import { useSelector, useDispatch } from "react-redux";
import { FormElement, Login } from "../components";
import {
  loginSelect,
  loginUserAsync,
} from "../../features/login/userLoginSlice";

import { useNavigate } from "react-router-dom";
import { ILoginAuthor } from "../../api/login/login";
import { Form } from "antd";
import { useEffect } from "react";

const LoginLayout = () => {
  const token = useSelector(loginSelect);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  useEffect(() => {
    if (token?.token) {
      navigate("/");
    }
  }, [token, navigate]);

  const onFinish = () => {
    const values: ILoginAuthor = form.getFieldsValue();

    dispatch(loginUserAsync({ ...values }));
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
        children={<Login />}
      />
    </>
  );
};

export default LoginLayout;
