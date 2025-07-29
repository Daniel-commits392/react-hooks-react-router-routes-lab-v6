import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/data/movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <>
      <header>
       <NavBar />
      </header>
      <main>
       {movies.map((movie) => (
          <MovieCard key={movie.id} title={movie.title} />
        ))}
      </main>
    </>
  );
};

export default Home;
