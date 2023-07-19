import { Link, useParams } from "react-router-dom";
// import products from "../../products";
import { useEffect, useState } from "react";
import axios from "axios";

const SingleHouse = () => {
  const [house, setHouse] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetchHouse = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setHouse(data);
    };
    fetchHouse();
  }, [id]);
  return (
    <>
      <div className="container mt-5">
        <Link to="/" className="btn btn-primary">
          Go Back
        </Link>
        <div className="row">
          <div className="col-md-5">
            <img src={house.image} className="img-fluid" alt="" />
          </div>
          <div className="col-md-3">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h3>{house.name}</h3>
              </li>
              <li className="list-group-item">
                <strong>Locatioin: {house.location}</strong>
                {/* <span>{house.numReviews} reviews</span> */}
              </li>
              <li className="list-group-item">Price: ${house.price}</li>
              <li className="list-group-item">
                Description: {house.description}
              </li>
            </ul>
          </div>
          {/* side bar */}
          <div className="col-md-3">
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="row">
                    <div className="col">Bath Rooms:</div>
                    <div className="col">
                      <span>{house.bathrooms}</span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col">Bed Rooms:</div>
                    <div className="col">
                      <span>{house.bedrooms}</span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col">Accommodates:</div>
                    <div className="col">
                      <span>{house.accommodates}</span>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col">Price:</div>
                    <div className="col">
                      <strong>${house.price}</strong>
                    </div>
                  </div>
                </li>

                <li className="list-group-item">
                  <button className="btn btn-block btn-primary" type="button">
                    Want To Rent
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleHouse;
