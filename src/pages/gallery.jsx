import { useState } from "react";

function Gallery() {
 const images = [
  "images/gallery/image1.webp",
  "images/gallery/image2.webp",
  "images/gallery/image3.webp",
  "images/gallery/image4.webp",
  "images/gallery/image5.webp",
  "images/gallery/image6.webp",
  "images/gallery/image7.webp",
  "images/gallery/image8.webp",
  "images/gallery/image9.webp",
  "images/gallery/image10.webp",
  "images/gallery/image11.webp",
  "images/gallery/image12.webp",
  "images/gallery/image13.webp",
  "images/gallery/image14.webp",
  "images/gallery/image15.webp",
  "images/gallery/image16.webp",
  "images/gallery/image18.webp",
  "images/gallery/image17.webp",
 ];

 const [loaded, setLoaded] = useState({});

 return (
   <main className="px-4 md:px-10 lg:px-20 py-16 max-w-7xl mx-auto">
    <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
     Our <span className="text-primary-light">Gallery</span>
    </h1>

    <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
     {images.map((image, index) => (
      <div
       key={index}
       className="break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-500 group cursor-pointer"
      >
       <img
        loading="lazy"
        src={image}
        alt={`Gallery ${index + 1}`}
        onLoad={() => setLoaded((prev) => ({ ...prev, [index]: true }))}
        className={`w-full h-auto object-cover transition-all duration-700 ease-out 
        ${loaded[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} group-hover:scale-105`}
       />
      </div>
     ))}
    </div>
   </main>
 );
}

export default Gallery;
