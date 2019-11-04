import React from 'react';
import Link from 'next/link';

const links = [{ href: '/shop', label: 'Shop' }, { href: '/faq', label: 'FAQ' }].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a className="brand">Dad hats with text</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: 'Arial', serif;
      }
      nav {
        text-align: center;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
      }
      ul {
        display: flex;
        justify-content: flex-start;
      }
      nav > ul {
        padding: 4px 16px;
        grid-column: 1 / span 12;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: black;
        text-decoration: none;
        font-size: 1em;
      }
      a.brand {
        font-weight: bold;
      }
      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </nav>
);

export default Nav;
