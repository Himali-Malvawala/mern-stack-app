import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateBookInfo = () => {
  const [book, setBook] = useState({
    title: "",
    isbn: "",
    author: "",
    image: "",
    description: "",
    published_date: "",
    publisher: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/books/${id}`)
      .then((res) => {
        setBook({
          title: res.data.title,
          isbn: res.data.isbn,
          author: res.data.author,
          image: res.data.image,
          description: res.data.description,
          published_date: res.data.published_date,
          publisher: res.data.publisher,
        });
      })
      .catch((err) => {
        console.log("Error from UpdateBookInfo!");
      });
  }, [id]);

  const onChangeHandler = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const data = {
      title: book.title,
      isbn: book.isbn,
      author: book.author,
      image: book.image,
      description: book.description,
      published_date: book.published_date,
      publisher: book.publisher,
    };

    axios
      .put(`http://localhost:8000/api/books/${id}`, data)
      .then((res) => {
        navigate(`/show-book/${id}`);
      })
      .catch((err) => {
        console.log("Error while Updating the book Info [UpdateBookInfo]!");
      });
  };

  return (
    <div>
      <Link
        to="/"
        className="bg-[#FFFFD0] hover:bg-transparent border-2 border-[#FFFFD0] px-3 py-2 text-lg font-semibold rounded-md hover:text-white text-left mr-auto text-[#A555EC]"
      >
        Show All Books
      </Link>
      <div>
        <h1>Edit Book</h1>
        <h5>Update Info</h5>
      </div>
      <div>
        <form className="mt-5" onSubmit={onSubmitHandler}>
          <div className="flex flex-col gap-5">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="py-2 px-3 rounded-md shadow-2xl mb-5 sm:w-[30rem]"
              value={book.title}
              onChange={onChangeHandler}
            />
            <label htmlFor="isbn">ISBN</label>

            <input
              type="text"
              placeholder="ISBN"
              name="isbn"
              className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
              value={book.isbn}
              onChange={onChangeHandler}
            />
            <label htmlFor="author">Author</label>

            <input
              type="text"
              placeholder="Author"
              name="author"
              className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
              value={book.author}
              onChange={onChangeHandler}
            />
            <label htmlFor="image">Image Link</label>

            <input
              type="text"
              placeholder="Image Link"
              name="image"
              className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
              value={book.image}
              onChange={onChangeHandler}
            />
            <label htmlFor="description">Description</label>

            <input
              type="text"
              placeholder="Description"
              name="description"
              className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
              value={book.description}
              onChange={onChangeHandler}
            />
            <label htmlFor="published_date">Published Date</label>

            <input
              type="date"
              placeholder="Published Date"
              name="published_date"
              className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
              value={book.published_date}
              onChange={onChangeHandler}
            />
            <label htmlFor="publisher">Publisher</label>

            <input
              type="text"
              placeholder="Publisher"
              name="publisher"
              className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
              value={book.publisher}
              onChange={onChangeHandler}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-3 rounded-md border-2 border-[#FFFFD0] hover:bg-[#FFFFD0] hover:text-[#A555EC] text-white font-medium shadow-2xl mt-7 sm:w-[30rem]"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBookInfo;
