import "./styles/App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AddingFlights() {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [tickets, setTickets] = useState([]);

  const handleSearch = () => {
    setTickets(
      tickets &&
        tickets.filter(
          (ticket) =>
            ticket.from.toLowerCase() === fromCity.toLowerCase() &&
            ticket.to.toLowerCase() === toCity.toLowerCase()
        )
    );
    console.log(setTickets);
  };

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await axios.get(
        "https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights"
      );
      setTickets(response.data);
    };
    fetchTickets();
  }, []);

  return (
    <div className="search-bg">
      <h1>Flights</h1>
      <div
        className="flight-search-container"
        style={{
          position: "relative",
          border: "1px solid rgba(81, 203, 238, 1)",
          borderRadius: "12px",
          padding: "8px",
          // backgroundColor: "rgb(135,206,235)"
          // backgroundColor: "rgb(246, 241, 224)"
          // backgroundColor: "#a3395c"
          // backgroundColor: "whitesmoke",
          color: "red"
        }}
      >
        <form>
          <div className="flight-search">
            <label>
              From:
              <input
                type="text"
                value={fromCity}
                placeholder="Delhi"
                className="inputbar"
                onChange={(e) => setFromCity(e.target.value)}
              />
            </label>
            <label>
              To:
              <input
                type="text"
                value={toCity}
                placeholder="Mumbai"
                className="inputbar"
                onChange={(e) => setToCity(e.target.value)}
              />
            </label>
          </div>
          <div className="flight-search2">
            <label>
              Departure date:
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
              />
            </label>
            <label>
              Return date:
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </label>
          </div>
          <button
            onClick={handleSearch}
            className="flight-search-submit"
            style={{ position: "absolute", bottom: "-20px" }}
            type="button"
          >
            Search
          </button>
        </form>
      </div>
      <div>
        <h1>Available Tickets</h1>
        {tickets.map((ticket) => (
          <div className="container">
            <div className="c1">
              <p>FROM:</p>
              <p>
                <b>{ticket.from}</b>
              </p>
              <p>TO:</p>
              <p>
                <b>{ticket.to}</b>
              </p>
              <p>Airline:</p>
              <p>
                <b>{ticket.airlineName}</b>
              </p>
            </div>

            <div className="c2">
              <p>Departure:</p>
              <p>
                <b>{`${ticket.departure.departureTime} | ${ticket.departure.departureDate}`}</b>
              </p>
              <p>Return:</p>
              <p>
                <b>{`${ticket.return.returnTime} | ${ticket.return.returnDate}`}</b>
              </p>
            </div>

            <div className="c3">
              <p>Price:</p>
              <p>
                <b>{ticket.price}</b>
              </p>
              <p>Via:</p>
              <p>
                <b>{ticket.via}</b>
              </p>
              <p>Duration:</p>
              <p>
                <b>{ticket.duration}</b>
              </p>
              <button className="book">
                <Link
                  to={{
                    pathname: "/checkout",
                    search: `?price=${ticket.price}`
                  }}
                  className="linkButton"
                >
                  BOOK NOW
                </Link>
              </button>
            </div>
          </div>
        ))}
        {tickets.length < 1 ? "No flights found" : null}
      </div>
    </div>
  );
}

export default AddingFlights;
