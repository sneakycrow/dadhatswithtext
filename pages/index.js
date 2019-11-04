import React, { Fragment } from 'react';
import Head from 'next/head';
import Nav from '../components/nav';

const Home = () => (
  <Fragment>
    <Head>
      <title>Dad hats with text</title>
    </Head>
    <div>
      <Nav />
      <h1>This will be the homepage</h1>
    </div>
  </Fragment>
);

export default Home;
