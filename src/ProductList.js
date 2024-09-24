import React from "react";

const ProductList = ({ products, editProduct, deleteProduct }) => {
  return (
    <div className="w-75 mx-auto my-5">
      <table className="table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Desc</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">
                There are no products
              </td>
            </tr>
          ) : (
            products.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.cat}</td>
                <td>{product.price}</td>
                <td>{product.desc}</td>
                <td>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => editProduct(index)}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteProduct(index)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
