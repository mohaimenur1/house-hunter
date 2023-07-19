import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <div className="col-lg-4 mb-4">
      <div className="card">
        <img src={product.image} className="img-fluid w-100" alt="..." />
        <div className="card-body">
          <h6>{product.name}</h6>
          <p>{product.description}</p>
          <Link to={`/api/products/${product._id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
