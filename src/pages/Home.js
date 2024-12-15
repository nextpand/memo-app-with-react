import React from "react";
import { Header } from "../components/Header/header";

export const Home = () => {
  // コンテナ全体のスタイル
  const containerStyle = {
    margin: '20px',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f3f4f6',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  // 見出しのスタイル
  const titleStyle = {
    fontSize: "36px",
    color: "#0288d1",
    marginBottom: "15px",
  };

  // テキストのスタイル
  const textStyle = {
    fontSize: "18px",
    color: "#555",
    lineHeight: "1.6",
  };

  return (
    <div style={containerStyle}>
      <Header />
      <h1 style={titleStyle}>ようこそ！</h1>
      <p style={textStyle}>
        このウェブサイトでは、HTML、CSS、JavaScript、Reactなど、フロントエンド開発に必要な基本的な技術について学ぶことができます。
      </p>
      <p style={textStyle}>
        上部のナビゲーションバーから各セクションにアクセスして、スキルを磨いてください！
      </p>
    </div>
  );
};