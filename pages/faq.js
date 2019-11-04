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
        grid-column: 1 / span 12;
        text-align: center;
      }
      ul {
        grid-row: 3;
        grid-column: 4 / span 6;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      li h3, li p {
        text-align: center;
        display: block;
        width: 100%;
      }
    `}</style>
  </Fragment>
)

export default FAQ;
