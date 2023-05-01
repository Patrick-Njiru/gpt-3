import React from "react";

import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from "./containers";
import { Brand, CTA, NavBar } from "./components";


function App() {
  return (
    <div className="App">
      <div>
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
