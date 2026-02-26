import React, { useState, useEffect } from "react";
import "../styles/gallery.css";
import Header from "../components/Header";
import Footer from "../components/Footer";


function Gallery() {
  
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "images/image1.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image6.jpg",
    "images/image9.jpg",
    "images/image10.jpg",
    "images/image11.jpg",
    "images/image12.jpg",
    "images/image13.jpg",
    "images/image14.jpg",
    "images/image15.jpg",
    "images/image16.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="App">
    <Header/>
      <main className="main-content">
        <h1 className="gallery-title">
          Our <span className="highlight2">Gallery</span>
        </h1>
        <div className="image-carousel">
          <div
            className="image-container"
            style={{
              transform: `translateX(-${currentImage * 100}%)`, 
            }}
          >
            {images.concat(images).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index + 1}`}
                className="gallery-image"
                onLoad={() => console.log(`Image ${index + 1} loaded`)}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Gallery;
