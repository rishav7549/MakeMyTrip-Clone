import "./styles/App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AddingTrains() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [trains, setTrains] = useState([]);

  const handleSearch = () => {
    setTrains(
      trains &&
        trains.filter(
          (train) =>
            train.from.toLowerCase() === source.toLowerCase() &&
            train.to.toLowerCase() === destination.toLowerCase()
        )
    );
    console.log(setTrains);
  };

  useEffect(() => {
    const fetchTrains = async () => {
      const response = await axios.get(
        "https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains"
      );
      setTrains(response.data);
    };
    fetchTrains();
  }, []);

  return (
    <div className="search-bg">
      <div>
        <h1>Trains</h1>
        <div
          className="flight-search-container"
          style={{
            position: "relative",
            border: "1px solid rgba(81, 203, 238, 1)",
            borderRadius: "12px",
            padding: "8px",
            // backgroundColor: "#87CEEB"
            // backgroundColor: "rgb(246, 241, 224)"
            color: "red"
          }}
        >
          <form>
            <div className="flight-search">
              <label>
                From:
                <input
                  type="text"
                  placeholder="Delhi"
                  className="inputbar"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                />
              </label>
              <label>
                To:
                <input
                  type="text"
                  placeholder="Mumbai"
                  className="inputbar"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </label>
            </div>
            <div className="flight-search2">
              <label>
                Travel Date:
                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                />
              </label>
            </div>
            <button
              onClick={handleSearch}
              className="flight-search-submit"
              style={{ position: "absolute", bottom: "-15px" }}
              type="button"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div>
        <h2>Available Trains</h2>
        {trains.map((train) => (
          <div className="container">
            <div className="c1">
              <p>FROM:</p>
              <p>
                <b>{train.from}</b>
              </p>
              <p>TO:</p>
              <p>
                <b>{train.to}</b>
              </p>
            </div>
            <div className="c2">
              <p>Departure:</p>
              <p>
                <b>{`${train.departure.departureTime} | ${train.departure.departureDate}`}</b>
              </p>
              <p>Train Number:</p>
              <p>
                <b>{train.train_number}</b>
              </p>
            </div>

            <div className="c3">
              <p>Price:</p>
              <p>
                <b>{train.price}</b>
              </p>
              <p>Kilometers:</p>
              <p>
                <b>{train.kilometers}</b>
              </p>
              <p>Duration:</p>
              <p>
                <b>{train.duration}</b>
              </p>
              <button className="book">
                <Link
                  to={{
                    pathname: "/checkout",
                    search: `?price=${train.price}`
                  }}
                  className="linkButton"
                >
                  BOOK NOW
                </Link>
              </button>
            </div>
          </div>
        ))}
        {trains.length < 1 ? "No trains found" : null}
      </div>
    </div>
  );
}

export default AddingTrains;
