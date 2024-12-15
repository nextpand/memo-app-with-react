import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header/header';

const ReactLink = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    padding: '20px',
    backgroundColor: '#e8f5e9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '28px',
    color: '#2e7d32',
    marginBottom: '10px',
  };

  const linkStyle = {
    display: 'block',
    fontSize: '18px',
    color: '#1b5e20',
    textDecoration: 'none',
    margin: '10px 0',
  };

  const listStyle = {
    paddingLeft: '20px',
  };

  return (
    <div style={containerStyle}>
      <Header />
      <h1 style={titleStyle}>React 学習ページ</h1>
      <p>ここではReactの基本について学びます。</p>
      <h2>学習セクション</h2>
      <ul style={listStyle}>
        <li>
          <Link to="/react/components" style={linkStyle}>
            コンポーネント
          </Link>
        </li>
        <li>
          <Link to="/react/hooks" style={linkStyle}>
            フック
          </Link>
        </li>
        <li>
          <Link to="/react/router" style={linkStyle}>
            React Router
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ReactLink;