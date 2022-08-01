import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import UserForm from "./UserForm";
import GameApp from "./GameApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

export default function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return "loading ...";
  }
  if (error) {
    return "There was an error";
  }
  if (!user) {
    return <UserForm />;
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/game/:id" element={<GameApp />}></Route>
      </Routes>
    </Router>
  );
}
