import React from 'react';

import { Container, PanelRouteWrapper } from './styles';
import Sidebar from '../../components/Sidebar';
import { Switch, Route } from 'react-router-dom';

import Products from './Products';
import CreateProduct from './Products/CreateProduct';
import EditProduct from './Products/EditProduct';

const Panel: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <PanelRouteWrapper>
        <Switch>
          <Route path="/panel/products" exact component={Products} />
          <Route path="/panel/products/create" component={CreateProduct} />
          <Route path="/panel/products/:id/edit" component={EditProduct} />
        </Switch>
      </PanelRouteWrapper>
    </Container>
  );
};

export default Panel;
