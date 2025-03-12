import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

interface IProps {
  movieId: string;
}

export default function DeleteUser({ movieId }: IProps) {
  const handleOnClick = async () => {
    await deleteDoc(doc(db, "movies", movieId));
    console.log("Movie is deleted succesfully");
  };

  return <button onClick={handleOnClick}>Delete User</button>;
}
