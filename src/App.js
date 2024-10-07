import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  const currency = queryParams.get("currency");
  const [showSuccessCredit, setShowSuccessCredit] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const [couponApplied, setCouponApplied] = useState(false);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/api/product/coupon-show/${credit}`
      );
      setShowCoupon(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

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

  const handleCouponApply = async () => {
    try {
      const response = await axios.post(`${baseUrl}/api/product/apply-coupon`, {
        couponCode,
      });
      setDiscountedPrice(price * (1 - response.data.discount / 100).toFixed(2));
      setCouponApplied(true);
    } catch (error) {
      console.error("Error applying coupon:", error);
    }
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
              ← Close
            </button>
            <h2 className="success-message">
              Payment processed successfully. You purchased {credit} credit
              {credit > 1 ? "s" : ""}.
            </h2>
          </>
        ) : (
          <>
            <button className="back-link" onClick={handleCloseWindow}>
              ← Close
            </button>
            <div className="package-details">
              <div className="package-info">
                <p className="value">{credit} Credit</p>
              </div>
              <div className="payment-info">
                {discountedPrice ? (
                  <p className="value price-line">
                    <span className="original-price">
                      <s>{price}</s>
                    </span>{" "}
                    <span className="discounted-price">{discountedPrice}</span>{" "}
                    {currency.toUpperCase()}
                  </p>
                ) : (
                  <p className="value">
                    {price} {currency.toUpperCase()}
                  </p>
                )}
              </div>
            </div>
            {showCoupon && !couponApplied && (
              <div className="coupon-container">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter coupon code"
                  disabled={couponApplied}
                />
                <button onClick={handleCouponApply} disabled={couponApplied}>
                  Apply
                </button>
              </div>
            )}
            <Elements stripe={stripePromise}>
              <CheckoutForm
                amount={discountedPrice || price}
                currency={currency}
                callBack={handleAddCredit}
              />
            </Elements>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
