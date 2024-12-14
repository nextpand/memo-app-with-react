import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header/header';

const HTMLLink = () => {
  return (
    <div>
        <Header />
      <h1>HTML 学習ページ</h1>
      <p>ここではHTMLの基本について学びます。</p>
      <h2>学習セクション</h2>
      <ul>
        <li>
          <Link to="/html/structure">HTMLの構造</Link>
        </li>
        <li>
          <Link to="/html/element">HTML要素</Link>
        </li>
        <li>
          <Link to="/html/form">フォームの使い方</Link>
        </li>
      </ul>
    </div>
  );
};

export default HTMLLink;