import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout from './routeWithLayouts';
import MainLayout from '../layout/layout';
import Home from '../views/home/home';
import Product from '../views/product/product';
import Login from '../views/login/login';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <RouteWithLayout
        component={Home}
        exact
        layout={MainLayout}
        path="/home"
      />
      <RouteWithLayout
        component={Product}
        exact
        layout={MainLayout}
        path="/product/:id"
      />
      <RouteWithLayout
        component={Login}
        exact
        layout={MainLayout}
        path="/login"
      />
    </Switch>
  );
};

export default Routes;
