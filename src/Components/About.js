import React from "react";
import "./aboutUs.css"; // Import the CSS file
import VideoSection from "./VideoSection";
import Header from "./Header";

const About = () => {
  return (
    <>
    <Header />
    <div className="about-us">
      {/* Header Section */}
      <header className="about-header">
        <div className="header-content">
          <h1>FARMAID</h1>
          <p>The Easiest Way To Protect Your Soybean Crop</p>
          <p>
            FARMAID is a web platform designed to enhance soybean disease
            management by delivering accurate diagnoses, recommending the right
            treatments, and guiding you with personalized care instructions for
            healthier crops.
          </p>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <img src="/icons/disease-icon.svg" alt="Disease Identification" />
          <p>Disease Identification</p>
        </div>
        <div className="feature">
          <img src="/icons/treatment-icon.svg" alt="Treatment Recommendation" />
          <p>Treatment Recommendation</p>
        </div>
        <div className="feature">
          <img src="/icons/guidelines-icon.svg" alt="Actionable Guidelines" />
          <p>Actionable Guidelines</p>
        </div>
      </section>

      {/* Video Section
      <section className="video-section">
        <VideoSection />
      </section> */}

      {/* Benefits Section */}
      <section className="benefits">
        <h2>Benefits</h2>
        <p>
          Plant health issues can stem from fungi, bacteria, viruses, nematodes,
          pests, insects, weeds, and other pathogens. To accurately identify
          and treat problems, farmers must carefully observe all symptoms and
          signs of their crops. Symptoms such as wilting, galls, cankers, rots,
          necrosis, and chlorosis often indicate underlying issues, while signs
          like oozing, cottony masses, or discoloration can further help
          pinpoint the cause.
        </p>
        <ul>
          <li>Biotic and abiotic agents often cause similar symptoms.</li>
          <li>Disorders vary between plant species.</li>
          <li>
            Causal agents (e.g., insects) may no longer be visible when damage
            is noticed.
          </li>
          <li>Some plant diseases lack external signs for identification.</li>
          <li>
            Environmental factors and weather may worsen or obscure the
            problem.
          </li>
        </ul>
        <p>
          Using FARMAID, farmers can:
          <ul>
            <li>Avoid costly mistakes and reduce chemical exposure.</li>
            <li>Maximize yield and profitability.</li>
            <li>Safeguard the environment for sustainable farming.</li>
          </ul>
        </p>
      </section>

      {/* Contact Section */}
      <footer className="contact">
        <h3>Contact</h3>
        <p>Email: soysoyproject@gmail.com</p>
      </footer>
    </div>
    </>
    
  );
};

export default About;
