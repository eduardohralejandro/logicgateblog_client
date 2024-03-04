import { Form, Row, Col, Button } from "antd";

const AddUserFooterLayout = () => {
  return (
    <Form.Item>
      <Row justify="end">
        <Col style={{ marginRight: 8 }}>
          <Button htmlType="reset">Cancel</Button>
        </Col>
        <Col>
          <Button type="primary" htmlType="submit">
            Save user
          </Button>
        </Col>
      </Row>
    </Form.Item>
  );
};

export default AddUserFooterLayout;
