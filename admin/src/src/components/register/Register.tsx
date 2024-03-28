import { Button, Form, Input } from "antd";
import { HeaderElement, Logo } from "../components";
import styles from "./register.module.scss";

const Register = () => {
  return (
    <div>
      <Logo className={styles.register__logo} />
      <div className={styles.register_header}>
        <HeaderElement title="Logic gates" level={4} />
      </div>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Lastname"
        name="lastname"
        rules={[{ required: true, message: "Please input your lastname!" }]}
      >
        <Input />
      </Form.Item>
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
        <Input type="password" />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="retype password"
        dependencies={["password"]}
        rules={[
          {
            required: true,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input type="password" />
      </Form.Item>
      <Form.Item>
        <Button
          style={{ width: "100%", backgroundColor: "#32a852" }}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Register
        </Button>
      </Form.Item>
    </div>
  );
};

export default Register;
