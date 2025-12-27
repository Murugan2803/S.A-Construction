import React, { type JSX } from "react";
import "../../CSS/Home.css";

const Home: React.FC = (): JSX.Element => {
  const services: string[] = [
    "Residential Construction",
    "Commercial Projects",
    "Renovation",
    "Interior Design",
  ];
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
      {/* SERVICES SECTION */}
      <section className="services py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Our Services</h2>
          <div className="row g-4">
            {services.map((title: string, index: number) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                <div className="service-card h-100">
                  <h5>{title}</h5>
                  <p>
                    High-quality solutions built with experience and trust.
                  </p>
                </div>
              </div>
            ))}
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
