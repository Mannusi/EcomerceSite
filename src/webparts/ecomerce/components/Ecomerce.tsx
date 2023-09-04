import * as React from 'react';
import styles from './Ecomerce.module.scss';
import { IEcomerceProps } from './IEcomerceProps';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Cart from '../Pages/Cart';
import Products from '../Pages/Products';
import Navigation from './NavComponent/Navigation';
import SingleProduct from '../Pages/SingleProduct';
require("../../../../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
import { Router, Route, HashRouter, Switch, Link } from 'react-router-dom';
import EcomerceContext, { PropertyContext } from '../../../Context/context';

export default class Ecomerce extends React.Component<IEcomerceProps, any> {

  constructor(props) {
    super(props)
    this.state = {
      cartItemCount: 0
    }
  }

  public render(): React.ReactElement<IEcomerceProps> {
    return (
      <>
        <div style={{ minWidth: "1200px" }}>
          <EcomerceContext>
            <HashRouter>
              <Navigation description={''} context={this.props.context}></Navigation>
              <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/Products" component={Products}></Route>
                <Route path="/About" component={About}></Route>
                <Route path="/Cart" component={Cart}></Route>
                <Route path="/SingleProduct/:_id" component={SingleProduct}></Route>
              </Switch>
            </HashRouter>
          </EcomerceContext>
        </div>
      </>
    );
  }
}
