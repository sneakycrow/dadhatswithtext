import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Nav from '../components/nav';

const Product = () => {
  const router = useRouter();
  return (
    <Fragment>
      <Head>
        <title>{router.query.title} - Dad hats with text</title>
      </Head>
      <div>
        <Nav />
        <h1>{router.query.title}</h1>
        <img src="/static/fake_hat_drawing.jpg" />
      </div>
    </Fragment>
  );
};

const Page = () => (
  <div>
    <Product />
  </div>
);

export default Page;
