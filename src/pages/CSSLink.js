import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header/header';

const CSSLink = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    padding: '20px',
    backgroundColor: '#e3f2fd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '28px',
    color: '#1565c0',
    marginBottom: '10px',
  };

  const linkStyle = {
    display: 'block',
    fontSize: '18px',
    color: '#0d47a1',
    textDecoration: 'none',
    margin: '10px 0',
  };

  const listStyle = {
    paddingLeft: '20px',
  };

  return (
    <div style={containerStyle}>
      <Header />
      <h1 style={titleStyle}>CSS 学習ページ</h1>
      <p>ここではCSSの基本について学びます。</p>
      <h2>学習セクション</h2>
      <ul style={listStyle}>
        <li>
          <Link to='structure'>
            CSSの構造
          </Link>
        </li>
        <li>
          <Link to="selectors" style={linkStyle}>
            CSSセレクタ
          </Link>
        </li>
        <li>
          <Link to="layout" style={linkStyle}>
            レイアウトの基本
          </Link>
        </li>
        <li>
          <Link to="animation" style={linkStyle}>
            アニメーション
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CSSLink;