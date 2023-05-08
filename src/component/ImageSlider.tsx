// components/ImageSlider.tsx

import React, { useState, useEffect } from "react";
import Image from "next/image";

type ImageSliderProps = {
  images: string[];
  interval?: number;
};

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  interval = 3000,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearTimeout(timer);
  }, [currentImageIndex, images, interval]);

  if (!images || images.length === 0) {
    return <div>No images provided</div>;
  }

  return (
    <div className="relative">
      {images.map((imgSrc, index) => (
        <div
          key={imgSrc}
          className={`${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          } absolute inset-0 transition-opacity duration-1000`}
        >
          <Image
            src={imgSrc}
            alt="Images used for slider"
            className="rounded-full"
            width="500"
            height="400"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
