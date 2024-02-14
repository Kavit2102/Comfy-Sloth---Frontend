import React, { useEffect, useState } from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
import axios from "axios";

const ProductList = () => {
  // const { filtered_products: products, grid_view } = useFilterContext();
  const { grid_view } = useFilterContext();
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://course-api.com/react-store-products")
      .then((result) => {
        // console.log(result.data);
        setproducts(result.data);
      })
      .catch((error) => console.log({ Error: error }));
  }, []);

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched your search...
      </h5>
    );
  }
  if (grid_view === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products}>product list</GridView>;
};

export default ProductList;
