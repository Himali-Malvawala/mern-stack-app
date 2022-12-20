import { Link } from "react-router-dom";

const CreateBook = () => {
  return (
    <div className="sm:flex sm:flex-col sm:justify-center sm:items-center mx-5 sm:mx-0">
      <Link
        to="/"
        className="bg-[#FFFFD0] hover:bg-transparent border-2 border-[#FFFFD0] px-3 py-2 text-lg font-semibold rounded-md hover:text-white"
      >
        Show All Books
      </Link>
      <h1 className="font-semibold text-4xl text-white">Add Book</h1>
      <h6 className="text-lg text-white">Create new book</h6>
      <form>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="py-2 px-3 rounded-md shadow-2xl mb-5 sm:w-[30rem]"
          />
          <input
            type="text"
            placeholder="ISBN"
            name="isbn"
            className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
          />
          <input
            type="text"
            placeholder="Author"
            name="author"
            className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
          />
          <input
            type="date"
            placeholder="Published Date"
            name="published_date"
            className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
          />
          <input
            type="text"
            placeholder="Publisher"
            name="publisher"
            className="py-2 px-3 rounded-md shadow-2xl sm:w-[30rem]"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-3 rounded-md border-2 border-[#FFFFD0] text-white font-medium shadow-2xl mt-7 sm:w-[30rem]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBook;

//A555EC
//D09CFA
//F3CCFF
//FFFFD0
