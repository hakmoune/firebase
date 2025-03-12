import { useState } from "react";
import { auth, db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

interface IMovie {
  id: string;
  recievedAnOscar: boolean;
  releaseDate: number;
  title: string;
}

export default function CreateMovie() {
  const [movie, setMovie] = useState<Omit<IMovie, "id">>({
    title: "",
    releaseDate: 0,
    recievedAnOscar: false,
  });

  const addMovie = async () => {
    try {
      const response = await addDoc(collection(db, "movies"), {
        ...movie,
        uid: auth.currentUser?.uid,
      });
      console.log(`The Movie is well added ${response.id}`);
    } catch (error) {
      console.error(`Faild to add movie : ${error}`);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor="title">
        Title
        <input
          type="text"
          id="title"
          value={movie.title}
          onChange={(e) =>
            setMovie((state) => ({ ...state, title: e.target.value }))
          }
          placeholder="Title..."
        />
      </label>

      <label htmlFor="releaseDate">
        Reales Date
        <input
          type="text"
          id="releaseDate"
          value={movie.releaseDate}
          onChange={(e) =>
            setMovie((state) => ({
              ...state,
              releaseDate: Number(e.target.value),
            }))
          }
          placeholder="Release Date..."
        />
      </label>

      <label htmlFor="hasAnOscar">
        Has An Oscar
        <input
          type="checkbox"
          id="hasAnOscar"
          checked={movie.recievedAnOscar}
          onChange={(e) =>
            setMovie((state) => ({
              ...state,
              recievedAnOscar: e.target.checked,
            }))
          }
        />
      </label>
      <button onClick={addMovie}>Create Movie</button>
    </div>
  );
}
