import React, { useState } from 'react';
import nextIcon from '../images/icon-next.svg';
import prevIcon from '../images/icon-previous.svg';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const prevImage = () =>
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="md:max-w-2xl mx-auto">
      {/* Main Image */}
      <div className="mb-4 cursor-pointer relative">
        <img
          src={images[selectedIndex]}
          alt={`Product ${selectedIndex + 1}`}
          onClick={openModal}
          // Use w-screen on mobile and w-full on md+ to fill full viewport width
          className="w-screen md:w-full h-auto object-cover md:rounded-lg  md:mx-0"
          // -mx-4 removes padding from parent px-4 on mobile
        />

        {/* Mobile Prev/Next buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-4 md:hidden">
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full w-10 h-10 flex items-center justify-center"
            aria-label="Previous image"
          >
            <img src={prevIcon} alt="Previous" className="w-3 h-3" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full w-10 h-10 flex items-center justify-center"
            aria-label="Next image"
          >
            <img src={nextIcon} alt="Next" className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Thumbnails - Hidden on mobile */}
      <div className="hidden md:flex justify-center gap-12 flex-wrap mt-4">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`border-2 rounded-lg overflow-hidden transition-all ${
              selectedIndex === index ? 'border-orange-500 ' : 'border-transparent'
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-22 h-22 object-cover hover:opacity-80"
            />
          </button>
        ))}
      </div>

      {/* Modal Carousel */}
      {isModalOpen && (
  <div
    className="fixed inset-0 flex items-center justify-center z-50 bg-black/80"
    onClick={closeModal}
  >
    <div
      className="relative  p-6 rounded-lg max-w-3xl w-full flex flex-col items-center"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-16 right-48 text-gray-700 text-3xl font-bold hover:text-orange-500 hover:cursor-pointer "
        aria-label="Close modal"
      >
        &times;
      </button>


        <div className='w-[70vh] flex flex-col'>

      {/* Main Modal Image */}
      <div className='rounded-lg overflow-hidden w-[70vh] max-h-[70vh] mb-4 mt-20'>

      <img
        src={images[selectedIndex]}
        alt={`Product Large ${selectedIndex + 1}`}
        className="w-full h-auto object-contain"
        />
        </div>

      {/* Modal Thumbnails */}
      <div className="flex justify-between gap-4 mt-2 w-[70vh]">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`border-2 rounded-lg overflow-hidden transition-all ${
              selectedIndex === index ? 'border-orange-500  opacity-50' : 'border-transparent'
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-16 h-16 object-cover hover:opacity-80"
              />
          </button>
        ))}
          </div>
      </div>

      {/* Prev/Next Buttons */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-30 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:cursor-pointer"
      >
        <img src={prevIcon} alt="Previous" className="w-3 h-3" />
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-30 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:cursor-pointer"
      >
        <img src={nextIcon} alt="Next" className="w-3 h-3" />
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default ImageGallery;
