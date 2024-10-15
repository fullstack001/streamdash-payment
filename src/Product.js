// App.js
import React from "react";
import Header from "./component/Header";
import ProductContent from "./component/ProductContent";
import Footer from "./component/Footer";

function Product() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex-grow">
        <ProductContent />
      </main>
      <Footer />
    </div>
  );
}

export default Product;
