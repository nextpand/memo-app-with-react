import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header/header';

const HTMLLink = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    padding: '20px',
    backgroundColor: '#fce4ec',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '28px',
    color: '#d81b60',
    marginBottom: '10px',
  };

  const sectionStyle = {
    marginTop: '20px',
  };

  const linkStyle = {
    display: 'block',
    fontSize: '18px',
    color: '#880e4f',
    textDecoration: 'none',
    margin: '10px 0',
  };

  const listStyle = {
    paddingLeft: '20px',
  };

  return (
    <div style={containerStyle}>
      <Header />
      <h1 style={titleStyle}>HTML 学習ページ</h1>
      <p>ここではHTMLの基本について学びます。</p>
      <div style={sectionStyle}>
        <h2>学習セクション</h2>
        <ul style={listStyle}>
          <li>
            <Link to="/html/structure" style={linkStyle}>
              HTMLの構造
            </Link>
          </li>
          <li>
            <Link to="/html/element" style={linkStyle}>
              HTML要素
            </Link>
          </li>
          <li>
            <Link to="/html/form" style={linkStyle}>
              フォームの使い方
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLLink;