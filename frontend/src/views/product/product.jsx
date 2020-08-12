import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import axios from 'axios';

class Product extends Component {
  state = { image: [] };

  async componentDidMount() {
    const { id } = this.props.match.params;
    // console.log(this.props);
    const { data } = await axios.get(`/api/products/${id}`);
    const image = [];
    // console.log(data);
    image.id = data[0]._id;
    image.image = data[0].image;
    image.name = data[0].name;
    image.price = data[0].price;
    image.brand = data[0].brand;
    this.setState({ image });
  }
  render() {
    console.log(this.state.image);
    const { image } = this.state;
    return (
      <Card style={{ padding: '0 22px' }}>
        <Row justify="center">
          <Col lg={12} xs={22} sm={18} md={15}>
            <Card
              hoverable
              style={{ padding: '2%' }}
              cover={
                <img
                  alt="example"
                  style={{ width: 150, height: 200 }}
                  src={image.image}
                />
              }
            >
              <Card.Meta title={image.name} description={image.price} />
            </Card>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default Product;
