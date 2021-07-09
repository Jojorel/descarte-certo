import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Footer from './components/Footer/index';
import Benefits from './components/Benefits/index';
import LoginPage from './components/Login/LoginPage';
import OrderListComponent from './components/OrderList';
import PrivateRouterComponent from './components/PrivateRouter/index';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-TZC8K8B',
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/contato" component={Footer} />
      <Route path="/beneficios" component={Benefits} />
      <Route path="/login" component={LoginPage} />
      <PrivateRouterComponent
        path="/orcamentos"
        component={OrderListComponent}
      />
    </Switch>
  </HashRouter>,
  document.getElementById('root'),
);
