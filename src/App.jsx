// import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';


import Header from './components/Header';


export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" elements={<Home />} />
    <Route path="/sign-up" elements={<SignUp />} />
    <Route path="/sign-in" elements={<SignIn />} />
    <Route path="/profile" elements={<Profile />} />
    <Route path="/about" elements={<About />} />
  </Routes>
  </BrowserRouter>
}
