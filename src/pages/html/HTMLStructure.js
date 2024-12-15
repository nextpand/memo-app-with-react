import React from 'react';
import { Header } from '../../components/Header/header';

const HTMLStructure = () => {
  // インラインスタイルの定義
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    fontSize: '24px',
    borderRadius: '5px',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '28px',
    color: '#333',
    marginTop: '20px',
  };

  const paragraphStyle = {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.6',
    marginTop: '10px',
  };

  return (
    <div style={containerStyle}>
      <Header style={headerStyle} />
      <h1 style={titleStyle}>HTMLの構造</h1>
      <p style={paragraphStyle}>
        HTMLの構造とは、ウェブページを作成するための基本的な骨組みです。HTMLは要素を使ってコンテンツを構造化し、ブラウザにその内容を表示させます。例えば、
        <code>&lt;html&gt;</code>、<code>&lt;head&gt;</code>、<code>&lt;body&gt;</code>などのタグが含まれます。
      </p>
    </div>
  );
};

export default HTMLStructure;