import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
          style={{ height: "100vh" }} // Full viewport height
        >
          <div className="carousel-inner" style={{ height: "100%" }}>
            <div className="carousel-item active" style={{ height: "100%" }}>
              <img
                src="./assets/banner3.jpg"
                className="d-block w-100"
                alt="First Slide"
                style={{ height: "100%", objectFit: "cover" }} // Ensures the image covers the full area
              />
              <div
                className="carousel-caption d-none d-md-block text-start d-flex align-items-center justify-content-start"
                style={{
                  position: "absolute",
                  left: "5%",
                  right: "auto",
                  top: "0",
                  bottom: "0",
                  display: "flex",
                  alignItems: "center",
                  height: "100%", // Ensures the container spans the full height
                }} // Align text to the left and center vertically
              >
                {/* Commenting out the slider text */}
                {/*
                <div>
                  <h5 className="fs-1 text fw-lighter">New Season Arrivals</h5>
                  <p className="fs-5">
                    Discover the latest trends and styles for the season.
                  </p>
                </div>
                */}
              </div>
            </div>
            <div className="carousel-item" style={{ height: "100%" }}>
              <img
                src="./assets/banner2.jpg"
                className="d-block w-100"
                alt="Second Slide"
                style={{ height: "100%", objectFit: "cover" }} // Ensures the image covers the full area
              />
              <div
                className="carousel-caption d-none d-md-block text-start d-flex align-items-center justify-content-start"
                style={{
                  position: "absolute",
                  left: "5%",
                  right: "auto",
                  top: "0",
                  bottom: "0",
                  display: "flex",
                  alignItems: "center",
                  height: "100%", // Ensures the container spans the full height
                }} // Align text to the left and center vertically
              >
                {/* Commenting out the slider text */}
                {/*
                <div>
                  <h5 className="fs-1 text fw-lighter">Exclusive Offers</h5>
                  <p className="fs-5">
                    Shop now and enjoy exclusive discounts on our collection.
                  </p>
                </div>
                */}
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
