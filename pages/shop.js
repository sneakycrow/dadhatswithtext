import React, { Fragment } from 'react';
import Nav from '../components/nav';
import Head from 'next/head';

const Shop = () => (
  <Fragment>
    <Head>
      <title>Dads with hats - Shop</title>
    </Head>
    <div>
      <Nav />
      <h1>This is the shop</h1>
    </div>
  </Fragment>
)

export default Shop;
