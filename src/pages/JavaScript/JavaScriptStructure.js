import React from 'react';
import { Header } from '../../components/Header/header';

const JavaScriptStructure = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    padding: '20px',
    backgroundColor: '#fff3e0',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '28px',
    color: '#f57c00',
    marginTop: '20px',
  };

  const paragraphStyle = {
    fontSize: '16px',
    color: '#e65100',
    lineHeight: '1.6',
    marginTop: '10px',
  };

  return (
    <div style={containerStyle}>
      <Header />
      <h1 style={titleStyle}>JavaScriptの概要</h1>
      <p style={paragraphStyle}>
        JavaScriptは、ウェブページにインタラクティブな動作を追加するためのプログラミング言語です。
        例えば、ボタンをクリックした際の動作を定義することができます。
      </p>
    </div>
  );
};

export default JavaScriptStructure;