import { FC, ReactNode } from "react";
import { Form } from "antd";

interface formValues {
  [field: string]: string;
}

interface IErrorInfo {
  values: formValues;
  errorFields: {
    name: (string | number)[];
    errors: string[];
  }[];
  outOfDate: boolean;
}

interface IDesignProps {
  designProps: {
    labelCol?: { span: number };
    wrapperCol?: { span: number };
  };
}
interface IFormProps {
  children: ReactNode;
  onFinish?: (value: string) => void;
  onFinishFailed?: () => void;
  onFieldsChange?: (changedFields: string) => void;
  name: string;
  layout: "horizontal" | "vertical" | "inline";
  style?: { [key: string]: string };
}
type FormPropsWithDefaults = IFormProps & { layout?: "vertical" };

const FormElement: FC<FormPropsWithDefaults> = (
  { children, name, layout, style },
  designProps: IDesignProps
) => {
  const onFinish = (values: string) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: IErrorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        name={name}
        layout={layout}
        labelCol={designProps.designProps?.labelCol}
        wrapperCol={designProps.designProps?.wrapperCol}
        style={style}
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
