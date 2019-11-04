import React, { Fragment } from 'react';
import Nav from '../components/nav';
import Head from 'next/head';
import Link from 'next/link';

const Shop = () => (
  <Fragment>
    <Head>
      <title>Shop - Dad hats with text</title>
    </Head>
    <div>
      <Nav />
      <h1>This is the shop</h1>
      <h2>Here's an example products</h2>
      <Link href="/product?title=example-product">
        <a>Example Product</a>
      </Link>
    </div>
    <style jsx>{`
      a {
        color: black;
        text-decoration: underline;
      }
    `}
    </style>
  </Fragment>
)

export default Shop;
