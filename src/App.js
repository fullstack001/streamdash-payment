// App.js
import React from "react";
import Header from "./component/Header";
import MainContent from "./component/MainContent";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex-grow">
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;
