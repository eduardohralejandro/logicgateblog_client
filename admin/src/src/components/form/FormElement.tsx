import { FC, ReactNode } from "react";
import { Form } from "antd";

interface IFormProps {
  children: ReactNode;
}

interface MyFormValues {
  [field: string]: string;
}

interface IErrorInfo {
  values: MyFormValues;
  errorFields: {
    name: (string | number)[];
    errors: string[];
  }[];
  outOfDate: boolean;
}

const FormElement: FC<IFormProps> = ({ children }) => {
  const onFinish = (values: string) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: IErrorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        {children}
      </Form>
    </>
  );
};

export default FormElement;
