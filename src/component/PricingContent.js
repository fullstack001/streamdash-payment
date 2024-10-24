import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal"; // Import the modal library

// Set app element for accessibility (required by react-modal)
Modal.setAppElement("#root");

const PricingContent = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false); // State to control modal visibility
  const [selectedPlan, setSelectedPlan] = useState(null); // State to store the selected plan

  useEffect(() => {
    axios.get("https://api.streamdash.co/api/product").then((response) => {
      console.log(response.data);
    });
  }, []);

  const plans = [
    {
      name: "Get started, today",
      price: "$0",
      period: "",
      description: "Multistreaming at no cost",
      buttonText: "Get started for free",
      featureText: "A taste of Multistreaming",
      features: ["2 channels", "Local recordings (soon)"],
    },
    {
      name: "Standard",
      price: "$20",
      period: "",
      billingInfo: "Billed as $190 per year",
      buttonText: "Choose this plan",
      featureText: "Free featurs, plus",
      features: [
        "3 channels",
        "No watermark in Studio",
        "AI generated clips (soon)",
      ],
    },
    {
      name: "Economic",
      price: "$90",
      period: "",
      billingInfo: "Billed as $320 per year",
      buttonText: "Choose this plan",
      featureText: "Standard features, plus",
      features: [
        "4 channels",
        "Studio in Full HD, 1080p",
        "Starts at 2 team seats",
        "Team workspaces (soon)",
      ],
    },
    {
      name: "Professional",
      price: "$150",
      period: "",
      billingInfo: "Billed as $470 per year",
      buttonText: "Choose this plan",
      featureText: "Economic features, plus",
      features: [
        "5 channels",
        "Studio in Full HD, 1080p",
        "Starts at 2 team seats",
        "Team workspaces (soon)",
      ],
    },
    {
      name: "Business",
      price: "$500",
      period: "",
      billingInfo: "Billed as $2,390 per year",
      buttonText: "Choose this plan",
      featureText: "Professional features, plus",
      features: [
        "8 channels",
        "30-day recording storage",
        "Priority support",
        "Website player, 1,000 viewers",
        "5 RTMP pull links",
      ],
    },
  ];

  const handleButtonClick = (plan) => {
    setSelectedPlan(plan); // Set the selected plan
    setModalIsOpen(true); // Open the modal
  };

  const closeModal = () => {
    setModalIsOpen(false); // Close the modal
  };

  return (
    <section className="bg-white py-10 px-4 lg:px-20">
      <div className="text-center">
        <h2 className="text-blue-300 text-xl my-6 md:text-3xl font-semibold">
          Get started, today
        </h2>
        <h1 className="text-3xl md:text-7xl text-blue-600 font-extrabold my-2">
          Choose how fast you want to grow
        </h1>
        <p className="text-gray-600 text-2xl md:text-4xl mt-6">
          Multistream & reach your audience, wherever they are.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`flex flex-col items-center bg-white p-6 border rounded-3xl shadow-md w-full sm:w-72 lg:w-80 ${
              index === 4 ? "border-blue-500" : "border-gray-200"
            }`}
          >
            <h3 className="text-blue-600 text-lg font-semibold">{plan.name}</h3>
            <div className="text-3xl text-gray-500 md:text-7xl my-8 font-bold mt-4">
              {plan.price}
              <span className="text-lg font-normal text-gray-500">
                {plan.period}
              </span>
            </div>
            <button
              className="bg-blue-400 text-white text-lg md:text-xl px-8 font-semibold py-2 rounded-lg mt-6"
              onClick={() => handleButtonClick(plan)} // Pass the plan to the handler
            >
              {plan.buttonText}
            </button>
            <div className="text-gray-700 text-xl mt-4 font-semibold text-left">
              {plan.featureText}
            </div>
            <ul className="text-gray-700 text-lg mt-4 space-y-1">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-green-500">✔️</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Modal for Checkout */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Stripe Checkout"
        className="bg-white w-11/12 md:w-1/2 mx-auto rounded-lg shadow-lg p-6"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-2xl font-bold mb-4">
          Checkout for {selectedPlan?.name}
        </h2>
        <div className="mb-4">
          <p className="text-lg">Price: {selectedPlan?.price}</p>
        </div>
        {/* Payment Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-lg font-medium">Card Number</label>
            <input
              type="text"
              className="w-full border-gray-300 rounded-md p-2 mt-1 focus:border-blue-500 focus:ring-blue-500"
              placeholder="1234 1234 1234 1234"
            />
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-lg font-medium">
                Expiration Date
              </label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-md p-2 mt-1 focus:border-blue-500 focus:ring-blue-500"
                placeholder="MM/YY"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-lg font-medium">CVC</label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-md p-2 mt-1 focus:border-blue-500 focus:ring-blue-500"
                placeholder="CVC"
              />
            </div>
          </div>
          <div>
            <label className="block text-lg font-medium">
              Card Holder Name
            </label>
            <input
              type="text"
              className="w-full border-gray-300 rounded-md p-2 mt-1 focus:border-blue-500 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md mt-4"
          >
            Pay {selectedPlan?.price}
          </button>
        </form>
        <button
          className="w-full bg-gray-300 text-black py-2 rounded-md mt-4"
          onClick={closeModal}
        >
          Close
        </button>
      </Modal>
    </section>
  );
};

export default PricingContent;
