import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function CookieClicker() {
  const [score, setScore] = useState(0);
  const cookieRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.to(cardRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  }, []);

  const handleClick = () => {
    setScore(score + 1);

    gsap.fromTo(
      cookieRef.current,
      { scale: 1 },
      { scale: 1.15, duration: 0.15, yoyo: true, repeat: 1 }
    );
  };

  return (
    <div className="card-cookie" ref={cardRef}>
      <h2>Points: {score}</h2>

      <button
  className="cookie-btn"
  onClick={handleClick}
>
  <img
    ref={cookieRef}
    src="/cookie.png"
    alt="Cookie"
    className="cookie-img"
  />
</button>

    </div>
  );
}
