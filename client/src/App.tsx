import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import NotFound from './screens/NotFound';
import AboutScreen from './screens/AboutScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import AuthNavbar from './components/AuthNavbar';
import ArticleScreen from './screens/ArticleScreen';
import ReaderScreen from './screens/ReaderScreen';
import CreateArticleScreen from "./screens/CreateArticleScreen";


function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Navigation />}>
          <Route index element={<HomeScreen />} />
          <Route path={"about"} element={<AboutScreen />} />
          <Route path={"login"} element={<LoginScreen />} />
          <Route path={"register"} element={<RegisterScreen />} /> 
        </Route>

        <Route path={"/auth"} element={<AuthNavbar />}>
          <Route index element={<ArticleScreen />} />
          <Route path={"article/:id"} element={<ReaderScreen />} />
          <Route path={"article/create"} element={<CreateArticleScreen />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
