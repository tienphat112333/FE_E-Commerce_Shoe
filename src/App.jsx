import { useState } from "react";
import Navigation from "./navigation/Navigation";
import Product from "./Product/Product";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
// data
import products from "./database/data";
import Card from "./components/Card";

const App = () => {
  const [selectedCategory, setSeclectedCategory] = useState(null);
  // ----Input filter -----
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  const filterItems = products.filter((prod) => {
    return (
      prod.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
    );
  });

  // ----Radio filter -----
  const handleRadioChange = (e) => {
    setSeclectedCategory(e.target.value);
  };
  // ----Buton filter -----
  const handleClick = (e) => {
    setSeclectedCategory(e.target.value);
  };

  function filterData(products, selected, input) {
    let filterProducts = products;
    if (input) {
      filterProducts = filterItems;
    }

    if (selected) {
      filterProducts = filterProducts.filter(
        ({ category, color, company, newPrice, title }) => {
          category === selected ||
            color === selected ||
            company === selected ||
            newPrice === selected ||
            title === selected;
        }
      );
    }
    return filterProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  return (
    <>
      <Sidebar />
      <Navigation />
      <Recommended />
      <Product />
    </>
  );
};
export default App;
