import React from "react";
import "./aboutUs.css"; // Import the CSS file
import VideoSection from "./VideoSection";
import Header from "./Header";
// import identifyImage from '../assets/identify.png';
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
// import { faMagnifyingGlass, faStethoscope, faListCheck } from '@fontawesome/free-solid-svg-icons';

const About = () => {
  return (
    <>
    <Header />
    <div className="about-us">
      {/* Main Content Section */}
      <div className="main-content">
        {/* Header Section */}
        <div className="about-header">
          <h1>The Easiest Way</h1>
          <h1>To Protect Your Soyabean Crop</h1>
          <p>
            FARMAID is a web platform designed to enhance soybean disease management by delivering
            accurate diagnoses, recommending the right treatments, and guiding you with personalized
            care instructions for healthier crops.
          </p>
        </div>

        {/* Features Section */}
        <div className="features">
          <div className="feature">
            <div className="feature-icon">
              <div className="image-placeholder">
                <span>Image 1</span>
              </div>
            </div>
            <h3>Disease Identification</h3>
            <p>Quick and accurate diagnosis of soybean diseases</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">
              <div className="image-placeholder">
                <span>Image 2</span>
              </div>
            </div>
            <h3>Treatment Recommendation</h3>
            <p>Personalized treatment plans for your crops</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">
              <div className="image-placeholder">
                <span>Image 3</span>
              </div>
            </div>
            <h3>Actionable Guidelines</h3>
            <p>Step-by-step instructions for crop care</p>
          </div>
        </div>
      </div>

      {/* Video and Benefits Section */}
      <div className="additional-content">
        <div className="video-section">
          <VideoSection 
            videoSrc="your-video-url.mp4"  // Replace with actual video URL
            thumbnail="https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=2942&auto=format&fit=crop"  // Replace with actual thumbnail
          />
        </div>

        <div className="benefits-section">
          <h2>Benefits</h2>
          <p className="benefits-intro">
            Plant health issues can stem from fungi, bacteria, viruses, nematodes, pests, insects, weeds, and other pathogens. To accurately identify and treat problems, farmers must carefully observe all symptoms and signs of their crops. Symptoms such as wilting, galls, cankers, rots, necrosis, and chlorosis often indicate underlying issues, while signs like oozing, cottony masses, or discoloration can further help pinpoint the cause.
          </p>
          
          <ul className="benefits-list">
            <li>Biotic and abiotic agents often cause similar symptoms.</li>
            <li>Disorders vary between plant species.</li>
            <li>Causal agents (e.g., insects) may no longer be visible when damage is noticed.</li>
            <li>Some plant diseases lack external signs for identification.</li>
            <li>Environmental factors and weather may worsen or obscure the problem.</li>
          </ul>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="info-section">
        <div className="info-content">
          <p className="info-text">
            Improper pest management can result in severe economic and environmental consequences, including unnecessary
            crop loss, soil degradation, and wasted resources on excessive pesticide and fertilizer use. Overuse of such treatments
            weakens plants, depletes vital soil nutrients like nitrogen and phosphorus, and reduces long-term productivity.
            FARMAID is a smart web platform designed to revolutionize soybean disease management by making diagnoses
            precise, treatment selection error-free, and application guided by personalized instructions. Using FARMAID, farmers
            can:
          </p>
          
          <ul className="benefits-list">
            <li>Avoid costly mistakes and reduce chemical exposure.</li>
            <li>Maximize yield and profitability.</li>
            <li>Safeguard the environment for sustainable farming.</li>
          </ul>

          <div className="farmaid-features">
            <h3><span className="highlight">FARMAID</span> combines:</h3>
            <ul className="features-list">
              <li>An extensive, up-to-date agricultural database.</li>
              <li>AI-powered diagnostic tools for precise disease detection.</li>
              <li>Easy-to-follow recommendations for treatment and care.</li>
            </ul>
          </div>

          <p className="conclusion-text">
            Accessible from any device, FARMAID empowers growers to make informed, eco-friendly decisions for healthier
            soybean crops and sustainable farming practices.
          </p>
        </div>
      </div>

      {/* Contact Footer */}
      <footer className="contact-footer">
        <div className="footer-content">
          <h2>CONTACT</h2>
          <p>Email : soysoyproject@gmail.com</p>
        </div>
      </footer>
    </div>
    </>
    
  );
};

export default About;
