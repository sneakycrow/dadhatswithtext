import React from 'react';
import Link from 'next/link';

const links = [{ href: '/faq', label: 'FAQ' }].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a className="brand">
            <img className="logo" src="/static/logo.png" />
          </a>
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
        padding: 0 16px;
      }
      ul {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
      nav > ul {
        padding: 0;
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
        display: inline-block;
      }
      img.logo {
        max-width: 64px;
        height: auto;
      }
      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </nav>
);

export default Nav;
