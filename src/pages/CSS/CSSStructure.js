
import React from 'react';
import { Header } from '../../components/Header/header';

const CSSStructure = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    padding: '20px',
    backgroundColor: '#e0f7fa',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '28px',
    color: '#00796b',
    marginTop: '20px',
  };

  const paragraphStyle = {
    fontSize: '16px',
    color: '#004d40',
    lineHeight: '1.6',
    marginTop: '10px',
  };

  return (
    <div style={containerStyle}>
      <Header />
      <h1 style={titleStyle}>CSSの基本構造</h1>
      <p style={paragraphStyle}>
        CSSとは、HTMLで作成された要素に対してスタイルを適用するための技術です。色、サイズ、配置などを設定し、ウェブページの見た目をデザインします。
        例えば、<code>color</code>プロパティを使用して文字色を指定することができます。
      </p>
    </div>
  );
};

export default CSSStructure;