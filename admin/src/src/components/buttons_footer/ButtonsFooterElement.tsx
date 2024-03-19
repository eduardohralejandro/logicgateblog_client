import { Form, Row, Col, Button } from "antd";
import { FC } from "react";
import { BtnType, BtnHtmlType, BtnJustifyType } from "../../enums/enums";

interface IButtonsFooterElementProps {
  justify?: BtnJustifyType;
  htmlType: [BtnHtmlType.BUTTON, BtnHtmlType.SUBMIT];
  textCancel: string;
  textSubmit: string;
  submit?: () => void;
  style?: { [key: string]: string };
}

const ButtonsFooterElement: FC<IButtonsFooterElementProps> = ({
  justify,
  htmlType,
  textCancel,
  textSubmit,
  style,
  submit
}) => {
  return (
    <Form.Item>
      <Row justify={justify}>
        <Col>
          <Button type={BtnType.DEFAULT} htmlType={htmlType[0]}>
            {textCancel}
          </Button>
        </Col>
        <Col>
          <Button onClick={submit} style={style} type={BtnType.PRIMARY} htmlType={htmlType[1]}>
            {textSubmit}
          </Button>
        </Col>
      </Row>
    </Form.Item>
  );
};

export default ButtonsFooterElement;
