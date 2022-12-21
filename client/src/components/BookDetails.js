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
    <div className="mx-5">
      <Link
        to="/"
        className="bg-[#FFFFD0] hover:bg-transparent border-2 border-[#FFFFD0] px-3 py-2 text-lg font-semibold rounded-md hover:text-white text-left mr-auto text-[#A555EC]"
      >
        Show All Books
      </Link>
      <div className="mt-8 text-white">
        <img
          src={book.image}
          alt={book.title}
          className="sm:w-[450px] sm:h-auto rounded-md shadow-xl"
        />
        <h1 className="text-3xl font-semibold mt-5">{book.title}</h1>
        <h6 className="text-lg">{book.author}</h6>
        <p className="font-light mt-3">{book.publisher}</p>
        <p className="font-light mt-1">ISBN: {book.isbn}</p>
        <p className="font-light mt-1">{book.published_date}</p>
        <p className="font-light mt-1">{book.description}</p>
      </div>
      <div className="flex justify-between items-center sm:w-[450px] gap-6 mt-8">
        <button
          type="button"
          onClick={() => {
            onDelete(book._id);
          }}
          className="border-2 border-[#FFFFD0] text-white py-1 grow rounded-md hover:bg-[#FFFFD0] hover:text-[#A555EC]"
        >
          Delete
        </button>
        <div className="border-2 border-[#FFFFD0] text-white py-1 grow text-center rounded-md hover:bg-[#FFFFD0] hover:text-[#A555EC] cursor-pointer">
          <Link to={`/edit-book/${book._id}`}>Edit</Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
