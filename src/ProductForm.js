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
      onsubmit="{onSubmit}"
      classname="w-75 mx-auto py-5 px-3 rounded-3 shadow-lg mt-5"
    >
      <h1>CRUD Project</h1>
      <div classname="mb-3">
        <label htmlfor="name" classname="form-label">
          Product Name
        </label>
        <input
          type="text"
          classname="form-control"
          id="name"
          defaultValue="{product.name}"
          onchange="{onChange}"
        />
      </div>
      <div classname="mb-3">
        <label htmlfor="cat" classname="form-label">
          Product Category
        </label>
        <input
          type="text"
          classname="form-control"
          id="cat"
          defaultValue="{product.cat}"
          onchange="{onChange}"
        />
      </div>
      <div classname="mb-3">
        <label htmlfor="price" classname="form-label">
          Product Price
        </label>
        <input
          type="text"
          classname="form-control"
          id="price"
          defaultValue="{product.price}"
          onchange="{onChange}"
        />
      </div>
      <div classname="mb-3">
        <label htmlfor="desc" classname="form-label">
          Product Desc
        </label>
        <textarea
          classname="form-control"
          id="desc"
          rows={3}
          value="{product.desc}"
          onchange="{onChange}"
          defaultValue={""}
        />
      </div>
      <button type="submit" classname="btn btn-primary">
        {"{"}currentProduct ? "Update Product" : "Add Product"{"}"}
      </button>
      <button type="button" classname="btn btn-secondary" onclick="{clearForm}">
        Clear
      </button>
    </form>
  );
};

export default ProductForm;
