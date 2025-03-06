import { useEffect, useState } from "react";
import "./App.css";
import Auth from "./components/Auth";
import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";

interface IMovie {
  id: string;
  recievedAnOscar: boolean;
  releaseDate: number;
  title: string;
}

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const moviesCollectionRef = collection(db, "movies");

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await getDocs(moviesCollectionRef);
        const data: IMovie[] = response.docs.map((doc) => ({
          ...(doc.data() as IMovie),
          id: doc.id,
        }));

        setMovies(data);
      } catch (error) {
        console.error("Failed to get data :", error);
      }
    };

    getMovies();
  }, [movies]);

  return (
    <>
      <div>
        <Auth />
      </div>
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
            <p>Date: {movie.releaseDate}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
