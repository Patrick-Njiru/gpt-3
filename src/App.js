import React from "react";

import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from "./containers";
import { Brand, CTA, NavBar } from "./components";
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />      
    </div>
  );
}

export default App;
