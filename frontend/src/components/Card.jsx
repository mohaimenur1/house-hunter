import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <div className="col-lg-4">
      <div className="card">
        <img src={product.image} className="img-fluid w-100" alt="..." />
        <div className="card-body">
          <h6>{product.title}</h6>
          <p>{product.description}</p>
          <p>Bed Rooms: {product.bedrooms}</p>
          <p>Bath Rooms: {product.bathrooms}</p>
          <p>Accommodates: {product.accommodates}</p>
          <p>Rent: {product.price} $</p>
          <Link to={`/product/${product.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
