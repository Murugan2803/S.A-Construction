import React, { type JSX } from "react";
import "../../CSS/Home.css";

const Home: React.FC = (): JSX.Element => {
  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero d-flex align-items-center">
        <div className="container text-white text-center text-md-start">
          <h1 className="fw-bold">S.A Construction Company</h1>
          <p className="lead">
            Strong foundations. Modern designs. Trusted delivery.
          </p>
        </div>
      </section>
      {/* ABOUT SUCCESS SECTION */}
      <section className="success-wrapper">
        <div className="success-card">

          {/* LEFT */}
          <div className="success-left">
            <h6>Build Your Dream</h6>
            <h2>
              25 Years Of Undefeated <br /> Success
            </h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque in ipsum id orci porta dapibus. Vivamus magna
              justo, lacinia eget consectetur sed, convallis.
            </p>

            <button>WORK WITH US</button>
          </div>

          {/* RIGHT */}
          <div className="success-right">
            <div className="stat">
              <h3>512+</h3>
              <p>Successfully Project Finished.</p>
            </div>

            <div className="stat">
              <h3>25+</h3>
              <p>Years of experience with proud</p>
            </div>

            <div className="stat">
              <h3>1120+</h3>
              <p>Revenue in 2017 investment</p>
            </div>

            <div className="stat">
              <h3>1520+</h3>
              <p>Colleagues & counting more daily</p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta text-center text-white py-5">
        <div className="container">
          <h2 className="fw-bold mb-3">Start Your Project Today</h2>
          <button className="btn btn-dark px-5">
            Book Appointment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
