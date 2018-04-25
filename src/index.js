import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Reservas from './Reservas';
import registerServiceWorker from './registerServiceWorker';

import {Router,Route,browserHistory} from 'react-router';


ReactDOM.render(
    (<Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/reservas" component={Reservas}/>
            <Route path="/check" component={App}/>
            <Route path="/financeiro" component={App}/>
            <Route path="/hospedes" component={App}/>
            <Route path="/integração" component={App}/>
        </Route>
  </Router>),



  document.getElementById('root')
  
);
