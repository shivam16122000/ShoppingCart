import { Layout, Menu, Image, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import s1 from './../shoe1.jpg';
import s2 from './../shoe2.jpeg';
import s3 from './../shoe3.jpeg';
import s4 from './../shoe4.jpg';
import s5 from './../shoe5.jpg';
import s6 from './../shoe6.jpg';
import s7 from './../shoe7.jpg';
import s8 from './../shoe8.jpg';
import s9 from './../shoe9.jpg';
import Homeshoe from './../homeshoe.jpg';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

let indexpointer = 0;
function Ap(props) {
  const { arr } = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/ShoppingCart/">
          <Homepage arr={arr} />
        </Route>
        <Route exact path="/shop">
          <Shop arr={arr} />
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

function Homepage(props) {
  const { Header, Content, Footer } = Layout;
  const { arr } = props;

  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" style={{ fontSize: '1.2em' }}>
              <Link to="/ShoppingCart/">Home</Link>
            </Menu.Item>

            <Menu.Item
              key="2"
              mode="horizontal"
              style={{
                float: 'right',
                paddingTop: '5px',
                height: '4.6em',
              }}
            >
              <Link to="/ShoppingCart/cart">
                {' '}
                <ShoppingCartOutlined style={{ fontSize: '1.9em' }} />
                <h3
                  style={{
                    position: 'relative',
                    color: 'white',
                    bottom: '70px',
                    left: '27px',
                  }}
                >
                  {' '}
                  {arr.length}
                </h3>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="3"
              style={{ float: 'right', marginRight: '20px', fontSize: '1.4em' }}
            >
              <Link to="/ShoppingCart/shop"> Shop</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 0px' }}>
          <div className="site-layoutc">
            <img src={Homeshoe} className="bg-image" />

            <div className="bg-text">
              <h2 style={{ color: 'green' }}></h2>
              <h1 style={{ fontSize: '50px', color: 'white' }}>
                Buy Brand New Shoe
              </h1>
              <p
                className="entry"
                style={{
                  color: 'green',
                  fontSize: 'large',
                  backgroundColor: 'white',
                  width: '20%',
                  margin: '0 auto',
                }}
              >
                <Link to="/ShoppingCart/shop">Enter Shop </Link>
              </p>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Made by @Shivam Tiwari</Footer>
      </Layout>
      ,
    </div>
  );
}
export default Homepage;

function Shop(props) {
  const { Header, Content, Footer } = Layout;
  const { arr, setArr } = props;
  let [count, setCount] = useState(-1);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
            <Menu.Item key="1" style={{ fontSize: '1.2em' }}>
              <Link to="/ShoppingCart/">Home</Link>
            </Menu.Item>

            <Menu.Item
              key="2"
              mode="horizontal"
              style={{
                float: 'right',
                paddingTop: '5px',
                height: '4.6em',
              }}
            >
              <Link to="/ShoppingCart/cart">
                {' '}
                <ShoppingCartOutlined style={{ fontSize: '1.9em' }} />
                <h3
                  style={{
                    position: 'relative',
                    color: 'white',
                    bottom: '70px',
                    left: '27px',
                  }}
                >
                  {' '}
                  {arr.length}
                </h3>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="3"
              style={{ float: 'right', marginRight: '20px', fontSize: '1.4em' }}
            >
              <Link to="/ShoppingCart/shop">Shop</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 0px' }}>
          <div className="site-layout-content">
            <ShoeComponent
              src={s1}
              name="shoe1"
              price={'$21'}
              setArr={setArr}
              arr={arr}
              count={count}
              increment={increment}
            />
            <ShoeComponent
              src={s2}
              name="shoe1"
              price={'$47'}
              setArr={setArr}
              arr={arr}
              count={count}
              increment={increment}
            />
            <ShoeComponent
              src={s3}
              name="shoe1"
              price={'$53'}
              setArr={setArr}
              arr={arr}
              count={count}
              increment={increment}
            />
            <ShoeComponent
              src={s4}
              name="shoe1"
              price={'$34'}
              setArr={setArr}
              arr={arr}
              count={count}
              increment={increment}
            />
            <ShoeComponent
              src={s5}
              name="shoe1"
              price={'$30'}
              setArr={setArr}
              arr={arr}
              count={count}
              increment={increment}
            />
            <ShoeComponent
              src={s6}
              name="shoe1"
              price={'$39'}
              setArr={setArr}
              arr={arr}
              count={count}
              increment={increment}
            />
            <ShoeComponent
              src={s7}
              name="shoe1"
              price={'$42'}
              setArr={setArr}
              arr={arr}
              count={count}
              increment={increment}
            />
            <ShoeComponent
              src={s8}
              name="shoe1"
              price={'$60'}
              setArr={setArr}
              arr={arr}
              count={count}
              increment={increment}
            />
            <ShoeComponent
              src={s9}
              name="shoe1"
              price={'$73'}
              setArr={setArr}
              arr={arr}
              count={count}
              increment={increment}
            />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Made by @Shivam Tiwari</Footer>
      </Layout>
      ,
    </div>
  );
}
export { Shop };

function Cart(props) {
  const { Header, Content, Footer } = Layout;
  const { arr } = props;
  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1" style={{ fontSize: '1.2em' }}>
              <Link to="/ShoppingCart/">Home</Link>
            </Menu.Item>

            <Menu.Item
              key="2"
              mode="horizontal"
              style={{
                float: 'right',
                paddingTop: '5px',
                height: '4.6em',
              }}
            >
              <Link to="/ShoppingCart/cart">
                <ShoppingCartOutlined style={{ fontSize: '1.9em' }} />
                <h3
                  style={{
                    position: 'relative',
                    color: 'white',
                    bottom: '70px',
                    left: '27px',
                  }}
                >
                  {' '}
                  {arr.length}
                </h3>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="3"
              style={{ float: 'right', marginRight: '20px', fontSize: '1.4em' }}
            >
              <Link to="/ShoppingCart/shop">Shop</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 0px' }}>
          <div className="site-layout">{arr}</div>
          <div>
            <CheckOut arr={arr} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Made by @Shivam Tiwari</Footer>
      </Layout>
      ,
    </div>
  );
}
export { Cart };

function ShoeComponent(props) {
  const { src, name, price, arr, count, increment } = props;
  let k = price.slice(1, 3);
  let numprice = parseInt(k);

  const incrementcounter = () => {
    indexpointer = indexpointer + numprice;
    arr.push(
      <CartComponent
        src={src}
        name={name}
        price={price}
        arr={arr}
        index={indexpointer}
        key={indexpointer}
      />
    );
  };
  return (
    <div className="shoeComponent" style={{ border: 'solid 1px black' }}>
      <div className="soloimg">
        <img src={src} style={{ width: '100%', height: '300px' }} />
      </div>
      <h2>{name}</h2>
      <div>
        {price}{' '}
        <Button type="primary" onClick={incrementcounter}>
          Add To Cart
        </Button>
        <Button type="link">
          <Link to="/ShoppingCart/cart">Go To Cart</Link>
        </Button>
      </div>
    </div>
  );
}
function CartComponent(props) {
  const { src, name, price, arr, index, key } = props;
  const eventhandle = (e) => {
    e.preventDefault();
    arr.splice(index, 1);
    console.log(index);
  };
  return (
    <div className="cartitem">
      <img src={src} style={{ width: '20%', margin: '40px 20px' }} />
      <div
        style={{
          position: 'relative',
          left: '20rem',
          bottom: '9rem',
          fontSize: '30px',
        }}
      >
        name={name}
      </div>
      <div
        style={{
          position: 'relative',
          left: '35rem',
          bottom: '12rem',
          fontSize: '30px',
        }}
      >
        price={price}
      </div>
      <div
        style={{
          position: 'relative',
          left: '55rem',
          bottom: '15.1rem',
          fontSize: '30px',
        }}
      ></div>
    </div>
  );
}
function CheckOut(props) {
  const { arr } = props;
  return (
    <div>
      <h1>Total Amount : ${indexpointer}</h1>
      <Button
        type="primary"
        onClick={() => {
          indexpointer = 0;
          arr.splice(0, arr.length);
        }}
      >
        <Link to="/ShoppingCart/checkout">CheckOut</Link>
      </Button>
    </div>
  );
}

function Thanks(props) {
  const { Header, Content, Footer } = Layout;
  const { arr } = props;
  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1" style={{ fontSize: '1.2em' }}>
              <Link to="/ShoppingCart/">Home</Link>
            </Menu.Item>

            <Menu.Item
              key="2"
              mode="horizontal"
              style={{
                float: 'right',
                paddingTop: '5px',
                height: '4.6em',
              }}
            >
              <Link to="/ShoppingCart/cart">
                <ShoppingCartOutlined style={{ fontSize: '1.9em' }} />
                <h3
                  style={{
                    position: 'relative',
                    color: 'white',
                    bottom: '70px',
                    left: '27px',
                  }}
                >
                  {' '}
                  0
                </h3>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="3"
              style={{ float: 'right', marginRight: '20px', fontSize: '1.4em' }}
            >
              <Link to="/ShoppingCart/shop">Shop</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 0px' }}>
          <div className="site-layout">
            <h1 style={{ color: 'purple', fontSize: '30px' }}>
              Thanks For Buying From SHIVAM Footwear !
            </h1>
            <Link to="/ShoppingCart/shop">
              <Button type="primary">Continue Shopping!</Button>
            </Link>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Made by @Shivam Tiwari</Footer>
      </Layout>
    </div>
  );
}

export { Thanks };
