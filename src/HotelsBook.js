import "./styles/App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AddingHotels() {
  const [city, setCity] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [hotels, setHotels] = useState([]);

  const handleSearch = () => {
    setHotels(
      hotels &&
        hotels.filter(
          (hotel) => hotel.city.toLowerCase() === city.toLowerCase()
        )
    );
    console.log(setHotels);
  };

  useEffect(() => {
    const fetchHotels = async () => {
      const response = await axios.get(
        "https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels"
      );
      setHotels(response.data);
    };
    fetchHotels();
  }, []);

  return (
    <div className="search-bg">
      <div>
        <h2>Hotels</h2>
        <div
          className="flight-search-container"
          style={{
            position: "relative",
            border: "1px solid black",
            borderRadius: "16px",
            padding: "8px",
            backgroundColor: "#87CEEB"
          }}
        >
          <form>
            <div className="flight-search">
              <label>
                City:
                <input
                  type="text"
                  placeholder="Mumbai"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>
            </div>
            <div className="flight-search2">
              <label>
                Check-in date:
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                />
              </label>
              <label>
                Check-out date:
                <input
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                />
              </label>
            </div>
            <button
              onClick={handleSearch}
              type="button"
              className="flight-search-submit"
              style={{ position: "absolute", bottom: "-15px" }}
            >
              Search
            </button>
          </form>
        </div>
        <div>
          <h2>Available Hotels</h2>
          {hotels.map((hotel) => (
            <div className="container">
              <div className="c1">
                <p>Hotel:</p>
                <p>
                  <b>{hotel.hotel_name}</b>
                </p>
                <p>City:</p>
                <p>
                  <b>{hotel.city}</b>
                </p>
                <p>Ratings:</p>
                <p>
                  <b>{hotel.rating}</b>
                </p>
              </div>

              <div className="c2">
                <p>Check-In:</p>
                <p>
                  <b>{hotel.check_in}</b>
                </p>
                <p>Check-Out:</p>
                <p>
                  <b>{hotel.check_out}</b>
                </p>
              </div>

              <div className="c3">
                <p>Price:</p>
                <p>
                  <b>{hotel.price_per_night}</b>
                </p>
                <p>Room:</p>
                <p>
                  <b>{hotel.room_type}</b>
                </p>
                <p>Guests:</p>
                <p>
                  <b>{hotel.guests}</b>
                </p>
                <button className="book">
                  <Link
                    to={{
                      pathname: "/checkout",
                      search: `?price=${hotel.price_per_night}`
                    }}
                    className="linkButton"
                  >
                    BOOK NOW
                  </Link>
                </button>
              </div>
            </div>
          ))}
          {hotels.length < 1 ? "No hotels found" : null}
        </div>
      </div>
    </div>
  );
}

export default AddingHotels;
