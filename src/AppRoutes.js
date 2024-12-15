import React from 'react';
import { Route, Routes } from 'react-router-dom';
import  {Home}  from './pages/Home';
import  HTMLLink  from './pages/HTMLink';
import  CSSLink  from './pages/CSSLink';
import  JavaScriptLink  from './pages/JavaScriptLink';
import  ReactLink  from './pages/ReactLink';
import HTMLStructure from './pages/html/HTMLStructure';
import HTMLElement from './pages/html/HTMLElement';
import HTMLForm from './pages/html/HTMLForm';
import CSSStructure from './pages/CSS/CSSStructure';
import JavaScriptStructure from './pages/JavaScript/JavaScriptStructure';
import ReactStructure from './pages/react/reactStructure';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/html" element={<HTMLLink />} />
      {/* HTML学習セクション */}
        <Route path='/html/structure' element={<HTMLStructure/>}/>
        <Route path="/html/element" element={<HTMLElement />} />
        <Route path="/html/form" element={<HTMLForm />} />

      <Route path="/css" element={<CSSLink />} />
      {/* CSS学習セクション */}
        <Route path='/css/structure' element={<CSSStructure/>}/>

      <Route path="/javascript" element={<JavaScriptLink />} />
        <Route path='/javascript/structure' element={<JavaScriptStructure/>}/>

      <Route path="/react" element={<ReactLink />} />
      {/* CSS学習セクション */}
        <Route path='/react/structure' element={<ReactStructure/>}/>
    </Routes>
  );
};