import { useEffect, useState } from "react";
// import products from "../../products.js";
import Card from "../components/Card.jsx";
import axios from "axios";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          {products?.housesData?.map((product) => {
            return <Card key={product._id} product={product}></Card>;
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
