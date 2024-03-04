import FormElement from "../form/FormElement";
import InputElement from "../input/InputElement";

import { Input, Form } from "antd";

type FieldType = {
  name: string;
  password: string;
  email: string;
};

const AddUserLayout = () => {
  const inputs = () => (
    <>
      <Form.Item<FieldType>
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <InputElement />
      </Form.Item>

      <Form.Item<FieldType>
        label="email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
    </>
  );

  return (
    <>
      <FormElement children={inputs()} />
    </>
  );
};

export default AddUserLayout;