import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

function About(){
  return(
    <div className="about">
      <h1>about page</h1>

    </div>
  )
}


function App() {
  return (
    <div>
      <NavBar />
      <About />
      <Home />

      
      
    </div>
  );
}

export default App;
