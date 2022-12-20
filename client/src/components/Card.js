import { Link } from "react-router-dom";

const Card = (props) => {
  const book = props.book;

  return (
    <div>
      <img src={book.image} alt={book.title} height={100} />
      <div>
        <h4>
          <Link to={`/show-book/${book._id}`}>{book.title}</Link>
        </h4>
        <h4>{book.author}</h4>
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default Card;
