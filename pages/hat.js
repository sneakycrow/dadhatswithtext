import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Nav from '../components/nav';

const HatPage = () => {
  const router = useRouter();
  return (
    <Fragment>
      <Head>
        <title>Hat - Dad hats with text</title>
      </Head>
      <div>
        <Nav />
        <h1>Dad hat with id of {router.query.id}</h1>
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
          text-align : center;
        }
      `}</style>
    </Fragment>
  );
};

export default HatPage;
