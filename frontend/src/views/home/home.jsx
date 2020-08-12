import React, { Component } from "react";
import axios from "axios";
import { Card, Row, Col, Button, Typography } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
// import data from "../../data.json";

class Home extends Component {
  state = { images: [] };

  async componentDidMount() {
    //calling data
    // const images = data;
    // this.setState({ images });
    const { data: images } = await axios.get("/api/products");
    this.setState({ images });
  }

  render() {
    const { images } = this.state;
    console.log(images);
    return (
      <Card>
        <Row justify="center">
          <Typography.Title level={3} style={{ textAlign: "center" }}>
            All Products
          </Typography.Title>
        </Row>
        <Row justify="center">
          {images.map((item) => (
            <Col
              xs={{ span: 15 }}
              sm={{ span: 15 }}
              lg={{ span: 11 }}
              key={item._id}
            >
              <Card
                hoverable
                style={{ padding: "2%" }}
                cover={
                  <img
                    alt="example"
                    style={{ width: "100%", height: 200 }}
                    src={item.image}
                  />
                }
              >
                <Card.Meta title={item.name} description={item.price} />
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    );
  }
}

export default Home;
