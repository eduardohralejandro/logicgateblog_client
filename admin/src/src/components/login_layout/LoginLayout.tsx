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
import { authSelect } from "../../features/auth/userRegisterSlice";
import styles from "./login_layout.module.scss";

const LoginLayout = () => {
  const token = useSelector(loginSelect);
  const auth = useSelector(authSelect);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  useEffect(() => {
    if (token?.token) {
      navigate("/");
    }
  }, [token, navigate, auth]);

  const onFinish = () => {
    const values: ILoginAuthor = form.getFieldsValue();

    dispatch(loginUserAsync({ ...values }));
  };
  const designProps = { labelCol: 6, wrapperCol: 8 };
  return (
    <>
      <FormElement
        className={styles.loginform}
        form={form}
        onFinish={onFinish}
        {...designProps}
        name="basic"
        layout="vertical"
        children={<Login />}
      />
    </>
  );
};

export default LoginLayout;
