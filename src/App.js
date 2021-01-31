import Homepage, { Shop, Cart, Thanks } from './component/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
function App() {
  const [arr, setArr] = useState([]);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Homepage arr={arr} />
        </Route>
        <Route exact path="/shop">
          <Shop arr={arr} setarr={setArr} />
        </Route>
        <Route exact path="/cart">
          <Cart arr={arr} />
        </Route>
        <Route exact path="/checkout">
          <Thanks />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
