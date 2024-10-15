// App.js
import React from "react";
import Header from "./component/Header";
import PricingContent from "./component/PricingContent";
import Footer from "./component/Footer";

function Price() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex-grow">
        <PricingContent />
      </main>
      <Footer />
    </div>
  );
}

export default Price;
