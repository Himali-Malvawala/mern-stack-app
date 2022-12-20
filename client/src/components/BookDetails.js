import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  const [book, setBook] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/books/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.log("Error from BookDetails!");
      });
  }, [id]);

  const onDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/books/${id}`)
      .then((res) => {
        navigate("/");
      })
      .catch((err) =>
        console.log("Error while Deleting the book [BookDetails]")
      );
  };

  return (
    <div>
      <Link
        to="/create-book"
        className="bg-[#FFFFD0] hover:bg-transparent border-2 border-[#FFFFD0] px-3 py-2 text-lg font-semibold rounded-md hover:text-white text-left mr-auto text-[#A555EC]"
      >
        + Create Book
      </Link>
      <div>
        <h1>{book.title}</h1>
        <h6>{book.author}</h6>
        <p>{book.isbn}</p>
        <p>{book.publisher}</p>
        <p>{book.published_date}</p>
        <p>{book.description}</p>
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            onDelete(book._id);
          }}
        >
          Delete
        </button>
        <Link to={`/edit-book/${book._id}`}>Edit</Link>
      </div>
    </div>
  );
};

export default BookDetails;
