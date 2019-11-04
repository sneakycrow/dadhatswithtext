import React, { Fragment } from 'react';
import Nav from '../components/nav';
import Head from 'next/head';
import ProductList from '../components/productList.js';

const productList = [
  {
    id: 1,
    image: '/static/fake_hat_drawing.jpg',
    title: 'Blue hat that says "dads hat"',
    price: {
      usd: '25'
    },
    description: 'look at the title'
  }
];

const Home = () => (
  <Fragment>
    <Head>
      <title>Shop - Dad hats with text</title>
    </Head>
    <div>
      <Nav />
      <h1>Shop</h1>
      <ProductList list={productList} />
    </div>
    <style jsx>{`
      div {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-auto-rows: max-content;
      }
      ${Nav} {
        grid-row: 1;
      }
      h1 {
        grid-row: 2;
        grid-column: span 12;
        text-align: center;
      }
      ${ProductList} {
        grid-row: 3;
      }
    `}
    </style>
  </Fragment>
)

export default Home;
