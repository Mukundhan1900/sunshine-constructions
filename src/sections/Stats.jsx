import { useEffect, useState } from "react";
import {
  FaBuilding,
  FaUsers,
  FaHardHat,
  FaAward,
} from "react-icons/fa";

const stats = [
  { end: 15, label: "Years Experience", icon: <FaAward /> },
  { end: 500, label: "Projects Completed", icon: <FaBuilding /> },
  { end: 200, label: "Happy Clients", icon: <FaUsers /> },
  { end: 100, label: "Skilled Workers", icon: <FaHardHat /> },
];

function Counter({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.ceil(end / 80);

    const timer = setInterval(() => {
      current += step;

      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      setCount(current);
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count}</>;
}

export default function Stats() {
  return (
    <section className="stats" id="stats">
      <div className="stats-heading">
        <span>OUR ACHIEVEMENTS</span>
        <h2>Numbers That Build Trust</h2>
      </div>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <div className="stat-box" key={index}>
            <div className="corner"></div>

            <div className="stat-top">
              <div className="icon">{item.icon}</div>
              <span>0{index + 1}</span>
            </div>

            <h3>
              <Counter end={item.end} />+
            </h3>

            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}