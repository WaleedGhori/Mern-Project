import React, { createContext, useReducer } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import ErrorPage from "./components/ErrorPage";
import Logout from "./components/Logout";
import { initialState, reducer } from "../src/reducer/UseReducer";

// 1: contextAPI
export const UserContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
};

export default App;
