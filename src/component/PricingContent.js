import React, { useState, useEffect } from "react";
import axios from "axios";

const PricingContent = () => {
  //   const [plans, setPlans] = useState([]);
  useEffect(() => {
    axios.get("https://api.streamdash.co/api/product").then((response) => {
      console.log(response.data);
    });
  }, []);

  const plans = [
    {
      name: "Get started, today",
      price: "$0",
      period: "/forever",
      description: "Multistreaming at no cost",
      buttonText: "Get started for free",
      features: ["2 channels", "Local recordings (soon)"],
    },
    {
      name: "Standard",
      price: "$16",
      period: "/mo",
      billingInfo: "Billed as $190 per year",
      buttonText: "Choose this plan",
      features: [
        "3 channels",
        "No watermark in Studio",
        "AI generated clips (soon)",
      ],
    },
    {
      name: "Economic",
      price: "$29",
      period: "/mo",
      billingInfo: "Billed as $320 per year",
      buttonText: "Choose this plan",
      features: [
        "4 channels",
        "Studio in Full HD, 1080p",
        "Starts at 2 team seats",
        "Team workspaces (soon)",
      ],
    },
    {
      name: "Professional",
      price: "$39",
      period: "/mo",
      billingInfo: "Billed as $470 per year",
      buttonText: "Choose this plan",
      features: [
        "5 channels",
        "Studio in Full HD, 1080p",
        "Starts at 2 team seats",
        "Team workspaces (soon)",
      ],
    },
    {
      name: "Business",
      price: "$199",
      period: "/mo",
      billingInfo: "Billed as $2,390 per year",
      buttonText: "Choose this plan",
      features: [
        "8 channels",
        "30-day recording storage",
        "Priority support",
        "Website player, 1,000 viewers",
        "5 RTMP pull links",
      ],
    },
  ];

  return (
    <section className="bg-white py-10 px-4 lg:px-20">
      <div className="text-center">
        <h2 className="text-blue-300 text-lg md:text-xl font-semibold">
          Get started, today
        </h2>
        <h1 className="text-3xl md:text-5xl text-blue-600 font-bold mt-2">
          Choose how fast you want to grow
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mt-2">
          Multistream & reach your audience, wherever they are.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`flex flex-col items-center bg-white p-6 border rounded-lg shadow-md w-full sm:w-72 lg:w-80 ${
              index === 4 ? "border-blue-500" : "border-gray-200"
            }`}
          >
            <h3 className="text-blue-600 text-lg font-semibold">{plan.name}</h3>
            <div className="text-4xl font-bold mt-4">
              {plan.price}
              <span className="text-lg font-normal text-gray-500">
                {plan.period}
              </span>
            </div>
            {plan.billingInfo && (
              <p className="text-gray-500 text-sm mt-1">{plan.billingInfo}</p>
            )}
            <p className="text-gray-500 text-sm mt-2">{plan.description}</p>
            <button className="bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg mt-6">
              {plan.buttonText}
            </button>
            <ul className="text-gray-700 text-sm mt-4 space-y-1">
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
    </section>
  );
};

export default PricingContent;
