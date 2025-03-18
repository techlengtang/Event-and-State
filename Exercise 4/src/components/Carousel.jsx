import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { ALL_IMAGES } from "../data/imagesData";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [currentIndex, setCurrentIndex] = useState(0);
  /* You will need to hanle the click on left and right button */
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  /* You will need to manage the cases when we are on the last image or first image*/

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handlePrev} />

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext} />
    </div>
  );
};
