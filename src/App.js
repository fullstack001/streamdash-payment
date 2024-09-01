import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./component/CheckoutForm";
import "./App.css";
import axios from "axios";
const stripeKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;
const baseUrl = process.env.REACT_APP_BASE_URL;
const stripePromise = loadStripe(stripeKey);

function App() {
  const location = useLocation();

  // Extract the query parameters from the URL
  const queryParams = new URLSearchParams(location.search);
  const credit = queryParams.get("credit");
  const price = queryParams.get("price");
  const email = queryParams.get("email");
  const [showSuccessCredit, setShowSuccessCredit] = useState(false);

  const handleAddCredit = () => {
    axios
      .post(`${baseUrl}/api/credit/buy-credit`, { email, credit })
      .then(() => {
        setShowSuccessCredit(true);
      })
      .catch(() => {
        console.log("network error");
      });
  };

  const handleCloseWindow = () => {
    window.close();
  };
  return (
    <div className="payment-container">
      <div className="payment-wrapper">
        {showSuccessCredit ? (
          <>
            <button className="back-link" onClick={handleCloseWindow}>
              ← Back
            </button>
            <h2 className="success-message">
              Payment processed successfully. You purchased {credit} credit
              {credit > 1 ? "s" : ""}.
            </h2>
          </>
        ) : (
          <>
            <button className="back-link" onClick={handleCloseWindow}>
              ← Back
            </button>
            <div className="package-details">
              <div className="package-info">
                <p className="value">{credit} Credit</p>
              </div>
              <div className="payment-info">
                <p className="value">${price}</p>
              </div>
            </div>
            <Elements stripe={stripePromise}>
              <CheckoutForm amount={price} callBack={handleAddCredit} />
            </Elements>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
