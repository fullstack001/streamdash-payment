import React, { useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import "./style.css";

const cardElementOptions = {
  style: {
    base: {
      fontSize: "20px",
      color: "#32325d",
      fontFamily: "Arial, sans-serif",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
    },
  },
};

const baseUrl = process.env.REACT_APP_BASE_URL;
const CheckoutForm = ({ amount, callBack }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setProcessingTo] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [cardError, setCardError] = useState("");
  const [expiryError, setExpiryError] = useState("");
  const [cvcError, setCvcError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cardElement = elements.getElement(CardNumberElement);
    const expiryElement = elements.getElement(CardExpiryElement);
    const cvcElement = elements.getElement(CardCvcElement);
    console.log(baseUrl);

    // Check for card number errors
    if (cardElement._complete !== true) {
      setCardError("Card number is incomplete or invalid.");
      setProcessingTo(false);
      return;
    } else {
      setCardError("");
    }

    // Check for expiry date errors
    if (expiryElement._complete !== true) {
      setExpiryError("Expiry date is incomplete or invalid.");
      setProcessingTo(false);
      return;
    } else {
      setExpiryError("");
    }

    // Check for CVC errors
    if (cvcElement._complete !== true) {
      setCvcError("CVC is incomplete or invalid.");
      setProcessingTo(false);
      return;
    } else {
      setCvcError("");
    }

    setProcessingTo(true);

    try {
      // Send a request to create a payment intent
      const res = await axios.post(
        `${baseUrl}/api/payment/create-payment-intent`,
        {
          amount: amount * 100, // Example amount in cents
        }
      );

      // Get the client secret from the response
      const clientSecret = res.data;

      // Confirm the card payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
          },
        }
      );

      // Handle payment errors
      if (error) {
        console.log(error.message);
        // Optionally set an error message in state
        // setErrorMessage(error.message);
        setProcessingTo(false);
      } else {
        // Check if payment was successful
        if (paymentIntent.status === "succeeded") {
          setProcessingTo(false);
          callBack(); // Execute callback function
        }
      }
    } catch (error) {
      // Handle any other errors that may occur
      console.error("An error occurred:", error.message);
      // Optionally set an error message in state
      // setErrorMessage("An unexpected error occurred. Please try again.");
      setProcessingTo(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <div className="form-group">
        <label className="label">Card number</label>
        <CardNumberElement
          className="input-element"
          options={cardElementOptions}
        />
        {cardError && <div className="error-message">{cardError}</div>}
      </div>
      <div className="form-group flex-group">
        <div className="form-group">
          <label className="label">Expiration date</label>
          <CardExpiryElement
            className="input-element"
            options={cardElementOptions}
          />
          {expiryError && <div className="error-message">{expiryError}</div>}
        </div>
        <div className="form-group">
          <label className="label">CVC</label>
          <CardCvcElement
            className="input-element"
            options={cardElementOptions}
          />
          {cvcError && <div className="error-message">{cvcError}</div>}
        </div>
      </div>
      <div className="form-group">
        <label className="label" htmlFor="name">
          Card Holder Name
        </label>
        <input type="text" placeholder="Name" className="input-element" />
      </div>

      <button disabled={isProcessing} type="submit" className="submit-button">
        {isProcessing ? (
          <img className="spinner" src="/spinners/spinner.svg" alt="spinner" />
        ) : (
          "Pay"
        )}
      </button>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </form>
  );
};

export default CheckoutForm;
