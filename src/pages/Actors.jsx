import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
    const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("/data/movies.json")
      .then((res) => res.json())
      .then((data) => {
        const allActors = data.flatMap((movie) => movie.actors);
        const uniqueActors = [...new Set(allActors)];
        setActors(uniqueActors);
      });
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
           <h1>Actors Page</h1>
        <ul>
          {actors.map((actor, index) => (
            <li key={index}>{actor}</li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Actors;
