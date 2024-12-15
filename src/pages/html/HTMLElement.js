import React from 'react';
import { Header } from '../../components/Header/header';

const HTMLElement = () => {
  const containerStyle = {
    margin: '20px',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f3f4f6',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '30px',
    color: '#0277bd',
    marginBottom: '15px',
  };

  const listStyle = {
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#0288d1',
    listStyleType: 'circle',
    paddingLeft: '20px',
  };

  return (
    <div style={containerStyle}>
      <Header />
      <h1 style={titleStyle}>HTML要素の使い方</h1>
      <ul style={listStyle}>
        <li>
          <strong>見出し要素:</strong> &lt;h1&gt; ～ &lt;h5&gt; タグを使って、文書の見出しを作成します。
        </li>
        <li>
          <strong>段落要素:</strong> &lt;p&gt; タグを使って段落を作ります。
        </li>
        <li>
          <strong>リンク要素:</strong> &lt;a&gt; タグを使って他のページへのリンクを作成します。
        </li>
        <li>
          <strong>リスト要素:</strong> &lt;ul&gt; や &lt;ol&gt; を使ってリストを作成します。
        </li>
        <li>
          <strong>画像要素:</strong> &lt;img&gt; タグを使って画像を表示します。
        </li>
      </ul>
      <h6 style={{ color: '#0277bd' }}>これは小さな見出しです</h6>
    </div>
  );
};

export default HTMLElement;