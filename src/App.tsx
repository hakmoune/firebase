import { useEffect, useState } from "react";
import Auth from "./components/Auth";
import { auth, db } from "./config/firebase";
import "./App.css";
import { collection, onSnapshot } from "firebase/firestore";
import CreateMovie from "./components/CreateMovie";
import DeleteUser from "./components/DeleteUser";

interface IMovie {
  id: string;
  recievedAnOscar: boolean;
  releaseDate: number;
  title: string;
}

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "movies"), (snapshot) => {
      const data: IMovie[] = snapshot.docs.map((doc) => ({
        ...(doc.data() as IMovie),
        id: doc.id,
      }));
      setMovies(data);
      if (auth.currentUser?.uid)
        console.log(`You're Connected... ${auth.currentUser?.uid}`);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Auth />
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
            <p>Date: {movie.releaseDate}</p>
            <DeleteUser movieId={movie.id} />
          </div>
        ))}
      </div>
      <CreateMovie />
    </>
  );
}

export default App;
