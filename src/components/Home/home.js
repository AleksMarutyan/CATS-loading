import React from "react";
import About from "../About/about";
import Works from "../Works/works";
import Contacts from "../Contacts/contacts";

function Home() {
  return (
    <div id="home">
      <About />
      <Works />
      <Contacts />
    </div>
  );
}

export default Home;
