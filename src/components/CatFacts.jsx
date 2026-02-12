import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function CatFacts() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cardRef = useRef(null);

  // Fetch podataka
  useEffect(() => {
    fetch("https://catfact.ninja/facts?limit=5")
      .then((res) => res.json())
      .then((data) => {
        setFacts(data.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Greška pri učitavanju podataka.");
        setLoading(false);
      });
  }, []);

  
  useEffect(() => {
    if (!loading && !error) {
      gsap.to(cardRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.from(".fact-item", {
        opacity: 0,
        x: -20,
        duration: 0.4,
        stagger: 0.1,
        delay: 0.2,
      });
    }
  }, [loading, error]);

  if (loading) return <p>Učitavanje...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="catfacts-card" ref={cardRef}>
      <h2>CatFacts</h2>
      <ul>
        {facts.map((item, index) => (
          <li key={index} className="fact-item">
            {item.fact}
          </li>
        ))}
      </ul>
    </div>
  );
}
