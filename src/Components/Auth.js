import React, { useState } from "react";
import "./auth.css"; // Importing the CSS file

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleForm = (formType) => {
    setIsSignUp(formType === "signup");
    setOtpSent(false); // Reset OTP state when toggling
    setPhoneNumber(""); // Clear inputs
    setOtp("");
  };

  const handleSendOtp = async () => {
    setLoading(true);
    try {
      // Call your backend API to send OTP
      const response = await fetch("https://your-backend-url.com/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber }),
      });

      if (response.ok) {
        alert("OTP sent successfully!");
        setOtpSent(true); // OTP is sent, move to the next step
      } else {
        alert("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending OTP!");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    try {
      // Call your backend API to verify OTP
      const response = await fetch("https://your-backend-url.com/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber, otp }),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Authentication Successful!");
        console.log(result); // Process user data or token
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error verifying OTP!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <h1 className="auth-title">FARM<span className="highlight">AID</span></h1>
        <p className="auth-tagline">From Diagnosis To Recovery</p>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <div className="auth-toggle">
            <span
              className={!isSignUp ? "active" : ""}
              onClick={() => toggleForm("login")}
            >
              Log in
            </span>
            <span
              className={isSignUp ? "active" : ""}
              onClick={() => toggleForm("signup")}
            >
              Sign Up
            </span>
          </div>

          <div className="auth-form">
            {isSignUp ? (
              <>
                <input
                  type="text"
                  placeholder="Enter username"
                  className="auth-input"
                />
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="auth-input"
                />
                <button
                  onClick={handleSendOtp}
                  disabled={loading || !phoneNumber}
                  className="auth-button"
                >
                  {loading ? "Sending OTP..." : "Register"}
                </button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="auth-input"
                />
                {otpSent && (
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="auth-input"
                  />
                )}
                <button
                  onClick={otpSent ? handleVerifyOtp : handleSendOtp}
                  disabled={loading || (!otpSent && !phoneNumber) || (otpSent && !otp)}
                  className="auth-button"
                >
                  {loading
                    ? "Processing..."
                    : otpSent
                    ? "Verify OTP"
                    : "Get OTP"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
