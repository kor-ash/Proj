import React from 'react'
import Home from './Home';
import Login from './Login';
import ShowInfo from './ShowInfo';
import Test from './Test';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import SearchResult from './SearchResult';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/Signup" element={<SignUp />}></Route>
          <Route path="/search/:id" element={<SearchResult></SearchResult>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
