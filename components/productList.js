import React from 'react';
import Link from 'next/link';

const Product = ({ data }) => {
  const link = `/hat?id=${data.id}`;
  return (
    <Link href={link}>
      <div>
        <Link href={link}>
          <h1>{data.title}</h1>
        </Link>
        <Link href={link}>
          <img src={data.image} alt={data.title} />
        </Link>
        <p className="usd">${data.price.usd}</p>
        <Link href={link}>
          <a>View Product</a>
        </Link>
        <style jsx>{`
          div {
            height: 400px;
            width: 400px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            grid-column: span 3;
            justify-self: center;
            border: calc(400px * 0.05) solid black;
            padding: 8px;
          }
          div:hover img {
            opacity: 0.5;
          }
          h1 {
            text-align: center;
          }
          img {
            max-width: 100%;
            height: auto;
            object-fit: contain;
            transition: opacity 0.25s ease-in-out;
          }
          p.usd {
            font-size: 2em;
            font-weight: bold;
            margin: 0.5rem;
          }
          a {
            font-weight: bold;
            text-decoration: none;
            color: black;
          }
          *:hover {
            cursor: pointer;
          }
        `}</style>
      </div>
    </Link>
  );
};

const ProductList = ({ list = [] }) => {
  if (list.length === 0) {
    return <h2>No products left</h2>;
  }
  return (
    <div>
      {list.map(product => (
        <Product data={product} />
      ))}
      <style jsx>{`
        div {
          grid-column: span 12;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: max-content;
          padding: 0 16px;
        }
      `}</style>
    </div>
  );
};

export default ProductList;
