import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {

    const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("/data/movies.json")
      .then((res) => res.json())
      .then((data) => {
        const uniqueDirectors = [
          ...new Set(data.map((movie) => movie.director)),
        ];
        setDirectors(uniqueDirectors);
      });
  }, []);

  return (
    <>
      <header>
      <NavBar/>
      </header>
      <main>
           <h1>Directors Page</h1>
        <ul>
          {directors.map((director, index) => (
            <li key={index}>{director}</li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Directors;
