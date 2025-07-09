import { useState } from "react";
import Navigation from "./navigation/Navigation";
import Product from "./Product/Product";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
// data
import products from "./database/data";

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
          return (
            category === selected ||
            color === selected ||
            company === selected ||
            newPrice === selected ||
            title === selected
          );
        }
      );
    }

    return filterProducts.map(
      ({ img, title, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filterData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleRadioChange={handleRadioChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Product result={result} />
    </>
  );
};
export default App;
