import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
    const { title } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch("/data/movies.json", import.meta.url)
      .then((res) => res.json())
      .then((movies) => {
        const foundMovie = movies.find((m) => m.title === title);
        setMovie(foundMovie);
      });
  }, [title]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {movie ? (
          <>
            <h1>{movie.title}</h1>
            <p>{movie.time} minutes</p>
            <ul>
              {movie.genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </>
  );
};

export default Movie;
