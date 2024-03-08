import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ForgetPassword from './pages/ForgotPassword';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Article from "./pages/blog/Article";
import Category from './pages/blog/Category';
import Listing from "./pages/blog/Listing";
import Layout from './pages/layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Listing />} />
          <Route path="/article/:id" element={<Article />}></Route>
          <Route path="/:category" element={<Category />}></Route>
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/password" element={<ForgetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;