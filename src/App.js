import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteList from "./RouteList";
import NavBar from "./NavBar";
import "./App.css"

function App() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => setDogs(data.dogs))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="App">
      <h1>Doggos!!</h1>
      <BrowserRouter>
        <NavBar dogs={ dogs } />
        <div>
          <RouteList dogs={ dogs } />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
