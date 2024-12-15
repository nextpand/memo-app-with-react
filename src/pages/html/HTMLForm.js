import React from 'react';
import { Header } from '../../components/Header/header';

const HTMLForm = () => {
  const containerStyle = {
    margin: '20px',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#e8f5e9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '28px',
    color: '#388e3c',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#2e7d32',
  };

  const formStyle = {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#ffffff',
    border: '1px solid #c8e6c9',
    borderRadius: '4px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#1b5e20',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    border: '1px solid #c8e6c9',
    borderRadius: '4px',
  };

  const buttonStyle = {
    display: 'block',
    padding: '10px 20px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <div style={containerStyle}>
      <Header />
      <h1 style={titleStyle}>HTMLフォーム</h1>
      <p style={paragraphStyle}>
        HTMLフォームはユーザーからデータを収集するための手段です。  
        例えば、名前やメールアドレスを入力して送信する機能を実現します。
      </p>
      <div style={formStyle}>
        <label style={labelStyle}>名前:</label>
        <input type="text" style={inputStyle} placeholder="お名前を入力してください" />
        <label style={labelStyle}>メールアドレス:</label>
        <input type="email" style={inputStyle} placeholder="メールアドレスを入力してください" />
        <button style={buttonStyle}>送信</button>
      </div>
    </div>
  );
};

export default HTMLForm;