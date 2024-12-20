import React, { useState, useEffect } from "react";

const ProductForm = ({
  addProduct,
  currentProduct,
  updateProduct,
  clearCurrentProduct,
}) => {
  const [product, setProduct] = useState({
    name: "",
    cat: "",
    price: "",
    desc: "",
  });

  useEffect(() => {
    if (currentProduct) {
      setProduct(currentProduct);
    } else {
      setProduct({
        name: "",
        cat: "",
        price: "",
        desc: "",
      });
    }
  }, [currentProduct]);

  const onChange = (e) => {
    setProduct({ ...product, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (currentProduct) {
      updateProduct(product);
    } else {
      addProduct(product);
    }
    clearCurrentProduct();
  };

  const clearForm = () => {
    setProduct({
      name: "",
      cat: "",
      price: "",
      desc: "",
    });
    clearCurrentProduct();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-75 mx-auto py-5 px-3 rounded-3 shadow-lg mt-5"
    >
      <h1>CRUD Project</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Product Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          defaultValue={product.name}
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="cat" className="form-label">
          Product Category
        </label>
        <input
          type="text"
          className="form-control"
          id="cat"
          defaultValue={product.cat}
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Product Price
        </label>
        <input
          type="text"
          className="form-control"
          id="price"
          defaultValue={product.price}
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label">
          Product Desc
        </label>
        <textarea
          className="form-control"
          id="desc"
          rows={3}
          value={product.desc}
          onChange={onChange}
          
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {currentProduct ? "Update Product" : "Add Product"}
      </button>
      <button type="button" className="btn btn-secondary" onClick={clearForm}>
        Clear
      </button>
    </form>
  );
};

export default ProductForm;
