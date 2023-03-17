import React, { useState } from "react";

function PaymentForm() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submission of form data
  };

  const handlePayment = () => {
    // Perform payment processing here
    alert("Payment successful!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          placeholder="Name on card"
          type="text"
          className="card-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        <input
          placeholder="Card Number"
          type="text"
          className="card-input"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </label>
      <br />
      <label>
        <input
          placeholder="Expiry Date"
          type="text"
          className="card-input"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        <input
          placeholder="CVV"
          type="text"
          className="card-input"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handlePayment} className="button-64">
        Pay Now
      </button>
    </form>
  );
}

export default PaymentForm;
