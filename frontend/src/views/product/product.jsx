import React, { Component } from 'react';
import { Card, Row, Col, Button } from 'antd';
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
  handleClick = () => {
    this.props.history.push('/login');
  };
  render() {
    console.log(this.state.image);
    const { image } = this.state;
    return (
      <Card style={{ padding: '0 22px' }}>
        <Row justify="center">
          <Col lg={7} xs={22} sm={18} md={15}>
            <Card hoverable style={{ padding: '2%' }}>
              <img
                alt="example"
                style={{ width: 150, height: 200 }}
                src={image.image}
              />
              <h2>{image.brand}</h2>
              <Card.Meta title={image.name} />
              <h2>{image.price}</h2>
              <Button type="primary" onClick={this.handleClick}>
                Submit
              </Button>
            </Card>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default Product;
