import React, { useState, useRef } from 'react';
import './ScanHere.css';
import Header from '../Components/Header';

const ScanHere = () => {
  const [image, setImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const [showCamera, setShowCamera] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleImageFile(file);
    }
  };

  const handleImageFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      handleImageFile(file);
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setShowCamera(true);
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  const captureImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
    const imageUrl = canvas.toDataURL('image/jpeg');
    setImage(imageUrl);
    setShowCamera(false);
    
    // Stop camera stream
    const stream = videoRef.current.srcObject;
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
  };

  const resetImage = () => {
    setImage(null);
    setShowCamera(false);
    if (videoRef.current?.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    }
  };

  return (
    <>
    <Header />
    <div className="scan-container">
      <div className="scan-content">
        <h1>Scan Your Plant</h1>
        <p>Upload or capture an image of your soybean plant for analysis</p>

        {!image && !showCamera && (
          <div 
            className={`upload-area ${isDragging ? 'dragging' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="upload-options">
              <button 
                className="upload-btn"
                onClick={() => fileInputRef.current.click()}
              >
                Choose File
              </button>
              <button 
                className="camera-btn"
                onClick={startCamera}
              >
                Open Camera
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileInput}
                accept="image/*"
                style={{ display: 'none' }}
              />
              <p>or drag and drop your image here</p>
            </div>
          </div>
        )}

        {showCamera && (
          <div className="camera-container">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="camera-preview"
            />
            <div className="camera-controls">
              <button onClick={captureImage}>Capture</button>
              <button onClick={resetImage}>Cancel</button>
            </div>
          </div>
        )}

        {image && (
          <div className="preview-container">
            <img src={image} alt="Preview" className="image-preview" />
            <div className="preview-controls">
              <button onClick={resetImage}>Remove</button>
              <button className="analyze-btn">Analyze Image</button>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default ScanHere;
