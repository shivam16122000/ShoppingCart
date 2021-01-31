import Homepage, { Shop, Cart, Thanks } from './component/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
function App() {
  const [arr, setArr] = useState([]);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/ShoppingCart/">
          <Homepage arr={arr} />
        </Route>
        <Route exact path="/ShoppingCart/shop">
          <Shop arr={arr} setarr={setArr} />
        </Route>
        <Route exact path="/ShoppingCart/cart">
          <Cart arr={arr} />
        </Route>
        <Route exact path="/ShoppingCart/checkout">
          <Thanks />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
