import React, { useEffect, useState } from "react";
import axios from "axios";
import Karakter from "./components/Karakter";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [page, setPage] = useState(1);
  const [heroesData, setHeroesData] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/?page=${page}`).then((response) => {
      //console.log(response);
      setHeroesData(response.data);
    });
  }, [page]);

  return (
    <div className="App">
      <h1 className="Header">REACT WARS </h1>

      {heroesData.map((char, index) => {
        return <Karakter char={char} key={index} />;
      })}
    </div>
  );
};

export default App;
