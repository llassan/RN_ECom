import { createContext, useEffect, useState } from "react";
// import { data } from "../model/ProductModel"
export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("https://dummyjson.com/products");
      //   console.log("Data", response.data.products);
      setData(response.data.products);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    (async () => {
      getData();
    })();
  }, []);

  return (
    <ProductContext.Provider value={{ isLoading, products: data }}>
      {children}
    </ProductContext.Provider>
  );
};
