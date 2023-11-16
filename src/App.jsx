import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-[#fff3cb] Ohidden">
        <Nav />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
