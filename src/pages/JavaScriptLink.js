import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header/header';

const JavaScriptLink = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    padding: '20px',
    backgroundColor: '#f3e5f5',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '28px',
    color: '#6a1b9a',
    marginBottom: '10px',
  };

  const linkStyle = {
    display: 'block',
    fontSize: '18px',
    color: '#4a148c',
    textDecoration: 'none',
    margin: '10px 0',
  };

  const listStyle = {
    paddingLeft: '20px',
  };

  return (
    <div style={containerStyle}>
      <Header />
      <h1 style={titleStyle}>JavaScript 学習ページ</h1>
      <p>ここではJavaScriptの基本について学びます。</p>
      <h2>学習セクション</h2>
      <ul style={listStyle}>
        <li>
          <Link to='structure'>
            JavaScriptの構造
          </Link>
        </li>
        <li>
          <Link to="/javascript/syntax" style={linkStyle}>
            JavaScript文法
          </Link>
        </li>
        <li>
          <Link to="/javascript/dom" style={linkStyle}>
            DOM操作
          </Link>
        </li>
        <li>
          <Link to="/javascript/api" style={linkStyle}>
            APIの使い方
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default JavaScriptLink;