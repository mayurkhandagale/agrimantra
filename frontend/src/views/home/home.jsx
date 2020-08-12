import React, { Component } from 'react';
import axios from 'axios';
import { Card, Row, Col, Button, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
// import data from "../../data.json";

class Home extends Component {
  state = { images: [] };

  async componentDidMount() {
    //calling data
    // const images = data;
    // this.setState({ images });
    const { data: images } = await axios.get('/api/products');
    this.setState({ images });
  }

  render() {
    const { images } = this.state;
    console.log(images);
    return (
      <Card style={{ padding: '0 22px' }}>
        <Row justify="center">
          <Typography.Title level={3} style={{ textAlign: 'center' }}>
            All Products
          </Typography.Title>
        </Row>
        <Row justify="center">
          <Col lg={12} xs={22} sm={18} md={15}>
            <Row justify="center">
              {images.map((item) => (
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 10 }}
                  lg={{ span: 11 }}
                  style={{ padding: '2%' }}
                  key={item._id}
                >
                  <Link to={`/product/${item._id}`}>
                    <Card
                      hoverable
                      style={{ padding: '2%' }}
                      cover={
                        <img
                          alt="example"
                          style={{ width: 150, height: 200 }}
                          src={item.image}
                        />
                      }
                    >
                      <Card.Meta title={item.name} description={item.price} />
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default Home;
