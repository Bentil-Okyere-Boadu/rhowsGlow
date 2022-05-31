import "./App.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="products/:id" element={<ProductDetails/>}/>
        <Route path="products" element={<Products itemsPerPage={4}/>} />
        <Route path="/" exact element={<Home/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
