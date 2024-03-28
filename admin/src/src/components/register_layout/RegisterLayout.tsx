import { Form } from "antd";
import { FormElement, Register } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  registerUserAsync,
  authSelect,
} from "../../features/auth/userRegisterSlice";
import { AppDispatch } from "../../app/store";
import IAuthor from "../../interfaces/author";
import { useEffect } from "react";
import styles from "./register_layout.module.scss";

const RegisterLayout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector(authSelect);
  const navigate = useNavigate();

  const [form] = Form.useForm();

  useEffect(() => {
    if (token?.token) {
      navigate("/");
    }
  }, [token, navigate]);

  const onFinish = () => {
    const values: IAuthor = form.getFieldsValue();
    delete values.password2;
    dispatch(registerUserAsync({ ...values }));
  };
  const designProps = { labelCol: 6, wrapperCol: 8 };
  return (
    <>
      <FormElement
        className={styles.register_container}
        form={form}
        onFinish={onFinish}
        {...designProps}
        name="basic"
        layout="vertical"
        children={<Register />}
      />
    </>
  );
};

export default RegisterLayout;
