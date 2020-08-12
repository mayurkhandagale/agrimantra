import React, { Component } from 'react';
import { Card, Row, Col, Input, Form, Button } from 'antd';
import axios from 'axios';

class Login extends Component {
  state = {};
  render() {
    const onFinish = async (value) => {
      try {
        await axios.post('/api/clients/', value);
      } catch (err) {
        console.log(err, 'error');
      }
    };
    return (
      <Card>
        <Row justify="center">
          <Col lg={7} xs={22} sm={18} md={15}>
            <Form name="register" onFinish={onFinish}>
              <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item
                name="number"
                label="Number"
                rules={[
                  {
                    required: true,
                    message: 'Please input your phone number!',
                  },
                ]}
              >
                <Input style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default Login;
