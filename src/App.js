import "./styles/App.css";
import AddingFlights from "./FlightsBook";
import AddingHotels from "./HotelsBook";
import AddingTrains from "./TrainsBook";
import Login from "./Login";
import Register from "./Register";
import CheckoutPage from "./checkoutPage";
import React, { useState, useEffect } from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("username");
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <div className="navbarflex">
        <div>
          <Link to="/flights" className="logo">
            <img
              className="mmt-logo"
              src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"
              alt="mmtLogo"
            />
          </Link>
        </div>
        <div>
          <div className="nav-flex">
            <ul className="nav-links">
              <li>
                <Link to="/flights" className="li">
                  Flights
                </Link>
              </li>
              <li>
                <Link to="/hotels" className="li">
                  Hotels
                </Link>
              </li>
              <li>
                <Link to="/trains" className="li">
                  Trains
                </Link>
              </li>
            </ul>
            <div className="user-profile">
              {isLoggedIn ? (
                <button className="logout-button" onClick={handleLogout}>
                  <img
                    style={{ width: "36px", height: "36px" }}
                    src="https://cdn-icons-png.flaticon.com/128/4436/4436954.png"
                    alt="logout"
                  />
                </button>
              ) : (
                <Link to="/login">
                  <img
                    style={{ width: "36px", height: "36px" }}
                    src="https://cdn-icons-png.flaticon.com/128/3711/3711310.png"
                    alt="login"
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<AddingFlights />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/flights" element={<AddingFlights />} />
          <Route path="/hotels" element={<AddingHotels />} />
          <Route path="/trains" element={<AddingTrains />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
