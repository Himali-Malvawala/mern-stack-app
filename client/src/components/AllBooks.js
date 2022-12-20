import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "./Card";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log("Error from AllBooks!");
      });
  }, []);

  const allBooks =
    books.length === 0
      ? "There is no Book record!!"
      : books.map((data, index) => <Card data={data} key={index} />);

  return (
    <div>
      <h1 className="font-semibold text-5xl text-white">Books List</h1>
      <Link
        to="/create-book"
        className="bg-[#FFFFD0] hover:bg-transparent border-2 border-[#FFFFD0] px-3 py-2 text-lg font-semibold rounded-md hover:text-white text-left mr-auto text-[#A555EC]"
      >
        + Create Book
      </Link>
      <div>{allBooks}</div>
    </div>
  );
};

export default AllBooks;
