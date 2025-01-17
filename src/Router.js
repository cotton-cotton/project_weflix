import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import UserProfile from './pages/UserProfile/UserProfile';
import SelectProfile from './pages/SelectProfile/SelectProfile';
import AddProfile from './pages/AddProfile/AddProfile';
import ContentList from './pages/ContentList/ContentList';
import KidsList from './pages/KidsList/KidsList';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route element={<SignUp />} />
        <Route element={<SignIn />} />
        <Route path="/profile/user" element={<UserProfile />} />
        <Route path="/profile/select" element={<SelectProfile />} />
        <Route path="/profile/add" element={<AddProfile />} />
        <Route path="/content/list" element={<ContentList />} />
        <Route path="/content/list/kids" element={<KidsList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
