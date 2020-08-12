import React, { Component } from "react";
import { Layout, Row, Typography, Col, Menu } from "antd";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <Layout.Header style={{ backgroundColor: "white" }}>
        <Row>
          <Col span={12}>
            <Row justify="end">
              <Typography.Text strong style={{ fontSize: "19px" }}>
                Products
              </Typography.Text>
            </Row>
          </Col>
          <Col span={12}>
            <Row justify="end">
              <Menu mode="horizontal">
                <Menu.Item>
                  <Link to="/home">Home</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/new">New</Link>
                </Menu.Item>
              </Menu>
            </Row>
          </Col>
        </Row>
      </Layout.Header>
    );
  }
}

export default Navbar;
