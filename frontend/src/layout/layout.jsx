import React from 'react';
import { Layout, Card } from 'antd';
import Navbar from './navbar/navbar';

const MainLayout = (props) => {
  return (
    <div>
      <Layout>
        <Navbar
          path={props.children.props.match.path}
          name={props.children.type.name}
        />
        <main>
          <Layout.Content>
            {/* <Card style={{ padding: "10px 160px 10px 160px " }}> */}
            {/* {childern} */}
            {props.children}
            {/* </Card> */}
          </Layout.Content>
        </main>
      </Layout>
    </div>
  );
};

export default MainLayout;
