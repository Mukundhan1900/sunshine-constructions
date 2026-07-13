import {
  FaHome,
  FaBuilding,
  FaIndustry,
  FaPaintRoller,
  FaHammer,
  FaDraftingCompass,
  FaTasks,
} from "react-icons/fa";

const services = [
  {
    title: "Residential Construction",
    icon: <FaHome />,
    desc: "Modern villas, apartments and luxury homes."
  },
  {
    title: "Commercial Buildings",
    icon: <FaBuilding />,
    desc: "Offices, shopping complexes and business spaces."
  },
  {
    title: "Industrial Projects",
    icon: <FaIndustry />,
    desc: "Warehouses, factories and industrial plants."
  },
  {
    title: "Interior Design",
    icon: <FaPaintRoller />,
    desc: "Elegant interiors with premium finishes."
  },
  {
    title: "Renovation",
    icon: <FaHammer />,
    desc: "Upgrade and modernize existing properties."
  },
  {
    title: "Structural Engineering",
    icon: <FaDraftingCompass />,
    desc: "Safe and durable engineering solutions."
  },
  {
    title: "Project Management",
    icon: <FaTasks />,
    desc: "Planning, supervision and timely delivery."
  }
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-title">
        <span>OUR EXPERTISE</span>
        <h2>Services We Offer</h2>
      </div>

      <div className="services-wrapper">
        {services.map((service, index) => (
          <div className="service-panel" key={index}>
            <span className="service-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}