import React, { useState, useEffect } from "react";
import { createBrowserHistory } from "history";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
import PaymentForm from "./CardDetails";

const CheckoutPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  const history = createBrowserHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const price = searchParams.get("price");
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  // Redirect to Login page if user is not logged in
  useEffect(() => {
    const loggedInUser = localStorage.getItem("username");
    if (loggedInUser) {
      setLoggedIn(true);
      setUserData(JSON.parse(loggedInUser));
      setUsername(loggedInUser);
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-page2">
        <div className="fare-summary">
          <h2>Fare Summary</h2>
          <p>Base Fare: {price}</p>
          <p>Fee and Surcharges: 0.00</p>
          <p>Total Amount: {price}</p>
        </div>
        <div className="payment-section">
          <h2>Payment Methods</h2>
          <PaymentForm />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
