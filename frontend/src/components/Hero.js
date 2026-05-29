import { useEffect, useRef } from "react";
import doctorImg from "../assets/doctor.png";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heroRef.current?.classList.add("hero-visible");
        }
      },
      { threshold: 0.2 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* Floating background blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="hero-left">
        <div className="doctor-wrapper">
          <img
            src={doctorImg}
            alt="Doctor illustration"
            className="doctor-svg"
          />

          {/* Floating badge */}
          <div className="doctor-badge">
            <span>🩺</span> AI Dermatologist
          </div>
        </div>
      </div>

      <div className="hero-right">
        <p className="small-heading">Your Skin Is Your Best Accessory</p>

        <h1>
          Protect Yourself<br />
          From <span className="gradient-text">Skin Disease</span>
        </h1>

        <p className="hero-text">
          AI powered dermatology assistant that predicts skin diseases
          using deep learning — instantly and securely.
        </p>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-n">6</span>
            <span className="stat-l">Conditions</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="stat-n">~2s</span>
            <span className="stat-l">Analysis</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="stat-n">Free</span>
            <span className="stat-l">To Use</span>
          </div>
        </div>

        <a href="#predict">
          <button className="hero-btn">
            Get Started →
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
