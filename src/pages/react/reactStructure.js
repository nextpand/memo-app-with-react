import React from 'react';
import { Header } from '../../components/Header/header';

const ReactStructure = () => {
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
    color: '#388e3c',
    marginTop: '20px',
  };

  const paragraphStyle = {
    fontSize: '16px',
    color: '#1b5e20',
    lineHeight: '1.6',
    marginTop: '10px',
  };

  return (
    <div style={containerStyle}>
      <Header />
      <h1 style={titleStyle}>Reactの基本</h1>
      <p style={paragraphStyle}>
        Reactは、コンポーネントベースで構築されたフロントエンドライブラリです。状態管理や再利用可能なUIコンポーネントを作成することで、効率的な開発が可能になります。
      </p>
    </div>
  );
};

export default ReactStructure;