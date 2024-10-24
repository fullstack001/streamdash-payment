import React from "react";
import ContactForm from "./component/ContactForm";
import Header from "./component/Header";
import Footer from "./component/Footer";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex-grow max-w-screen-xl mx-auto">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
