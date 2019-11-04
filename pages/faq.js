import React, { Fragment } from 'react';
import Head from 'next/head';
import Nav from '../components/nav';

const FAQ = () => (
  <Fragment>
    <Head>
      <title>Frequently Asked Questions - Dad hats with text</title>
    </Head>
    <div>
      <Nav />
      <h1>Frequently Asked Questions</h1>
      <ul>
        <li>
          <h3>Can I change the color of my hat?</h3>
          <p>No.</p>
        </li>
        <li>
          <h3>Can I customize the text on my hat?</h3>
          <p>No.</p>
        </li>
        <li>
          <h3>Why not?</h3>
          <p>Because I said so.</p>
        </li>
      </ul>
    </div>
  </Fragment>
)

export default FAQ;
