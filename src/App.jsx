import Navigation from "./navigation/Navigation";
import Product from "./Product/Product";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

const App = () => {
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
