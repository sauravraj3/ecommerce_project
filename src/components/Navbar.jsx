import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ onCurrencyChange }) => {
  const state = useSelector((state) => state.handleCart);
  const [currency, setCurrency] = useState("USD");

  const handleCurrencyChange = (selectedCurrency) => {
    setCurrency(selectedCurrency);
    onCurrencyChange(selectedCurrency); // Notify parent or global state
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
          SR Ecommerce
        </NavLink>
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto my-2 text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="buttons text-center d-flex align-items-center">
            {/* Currency Dropdown */}
            <div className="dropdown me-3">
              <button
                className="btn btn-outline-dark dropdown-toggle"
                type="button"
                id="currencyDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {currency === "USD" ? (
                  <>
                    <img
                      src="https://flagcdn.com/us.svg"
                      alt="USA Flag"
                      width="20"
                      className="me-2"
                    />
                    USD
                  </>
                ) : (
                  <>
                    <img
                      src="https://flagcdn.com/in.svg"
                      alt="India Flag"
                      width="20"
                      className="me-2"
                    />
                    INR
                  </>
                )}
              </button>
              <ul className="dropdown-menu" aria-labelledby="currencyDropdown">
                <li>
                  <button
                    className="dropdown-item d-flex align-items-center"
                    onClick={() => handleCurrencyChange("USD")}
                  >
                    <img
                      src="https://flagcdn.com/us.svg"
                      alt="USA Flag"
                      width="20"
                      className="me-2"
                    />
                    USD
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item d-flex align-items-center"
                    onClick={() => handleCurrencyChange("INR")}
                  >
                    <img
                      src="https://flagcdn.com/in.svg"
                      alt="India Flag"
                      width="20"
                      className="me-2"
                    />
                    INR
                  </button>
                </li>
              </ul>
            </div>

            <NavLink to="/login" className="btn btn-outline-dark m-2">
              <i className="fa fa-sign-in-alt mr-1"></i> Login
            </NavLink>
            <NavLink to="/register" className="btn btn-outline-dark m-2">
              <i className="fa fa-user-plus mr-1"></i> Register
            </NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark m-2">
              <i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length})
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
