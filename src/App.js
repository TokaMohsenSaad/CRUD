import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const updateProduct = (product) => {
    const updatedProducts = products.map((p) =>
      p === currentProduct ? product : p
    );
    setProducts(updatedProducts);
  };

  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const editProduct = (index) => {
    setCurrentProduct(products[index]);
  };

  const clearCurrentProduct = () => {
    setCurrentProduct(null);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchTerm) ||
        product.cat.toLowerCase().includes(searchTerm) ||
        product.price.toLowerCase().includes(searchTerm) ||
        product.desc.toLowerCase().includes(searchTerm)
      );
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className="App">
      <ProductForm
        addProduct={addProduct}
        currentProduct={currentProduct}
        updateProduct={updateProduct}
        clearCurrentProduct={clearCurrentProduct}
      />
      <SearchBar search={handleSearch} />
      <ProductList
        products={filteredProducts.length ? filteredProducts : products}
        editProduct={editProduct}
        deleteProduct={deleteProduct}
      />
    </div>
  );
}

export default App;
