import { Button, Form, Input } from "antd";
import { Logo } from "../components";
import styles from "./login.module.scss";

const Login = () => {
  return (
    <>
      <Logo className={styles.login__logo} />
      <Form.Item
        label="email"
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="password"
        name="password"
        rules={[
          {
            required: true,
          },
        ]}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button
          style={{ width: "100%" }}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Login
        </Button>
      </Form.Item>
    </>
  );
};

export default Login;
