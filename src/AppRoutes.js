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

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/HTMLLink" element={<HTMLLink />} />
      {/* HTML学習セクション */}
        <Route path='/html/structure' element={<HTMLStructure/>}/>
        <Route path="/html/element" element={<HTMLElement />} />
        <Route path="/html/form" element={<HTMLForm />} />

      <Route path="/CSSLink" element={<CSSLink />} />
      <Route path="/JavaScriptLink" element={<JavaScriptLink />} />
      <Route path="/ReactLink" element={<ReactLink />} />
    </Routes>
  );
};