import { Route, Routes } from "react-router-dom";
import AllBooks from "./components/AllBooks";
import BookDetails from "./components/BookDetails";
import CreateBook from "./components/CreateBook";
import UpdateBookInfo from "./components/UpdateBookInfo";

const App = () => {
  return (
    <div>
      <header>
        <div className="mt-10 mb-10">
          <Routes>
            <Route exact path="/" element={<AllBooks />} />
            <Route path="/create-book" element={<CreateBook />} />
            <Route path="edit-book/:id" element={<UpdateBookInfo />} />
            <Route path="/show-book/:id" element={<BookDetails />} />
          </Routes>
        </div>
      </header>
    </div>
  );
};

export default App;
