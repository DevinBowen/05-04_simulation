import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Aab from './components/details/Aab';
import Sjb from './components/details/Sjb';
import Cart from './components/Cart';

export default (
    <Switch>
        
         <Route exact path='/' component={Home} />
         <Route path='/menu' component={Menu} />
         <Route path='/details/aab' component={Aab} />
         <Route path='/details/sjb' component={Sjb} />
         <Route path='/cart' component={Cart} />
         
    </Switch>
)
