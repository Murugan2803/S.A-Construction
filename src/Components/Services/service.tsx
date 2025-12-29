import React from "react";
import "../../CSS/Services.css"

interface ServiceItem {
  title: string;
  image: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    title: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1556912167-f556f1f39df7?q=80&w=1200",
    description:
      "Beautiful, functional kitchens designed to fit your lifestyle with premium materials and expert craftsmanship."
  },
  {
    title: "Bathrooms",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200",
    description:
      "Modern bathroom remodeling with elegant fixtures, smart layouts, and long-lasting finishes."
  },
  {
    title: "Interiors",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200",
    description:
      "Complete interior renovations that transform your home into a stylish, comfortable space."
  }
];

const Services: React.FC = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>

            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
