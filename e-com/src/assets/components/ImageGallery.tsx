import React, { useState } from 'react';
import  nextIcon from '../images/icon-next.svg';
import prevIcon from '../images/icon-previous.svg';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const prevImage = () => setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Main Image */}
      <div className="mb-4 cursor-pointer" onClick={openModal}>
        <img
            src={images[selectedIndex]}
            alt={`Product ${selectedIndex + 1}`}
            className="w-76 h-88 object-cover rounded-lg ml-18"
        />
        </div>

      {/* Thumbnail Images */}
      <div className="flex justify-center gap-4">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`border-2 rounded-lg overflow-hidden transition-all ${
              selectedIndex === index ? 'border-blue-500' : 'border-transparent'
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

      {/* Modal Carousel */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-transparent backdrop-brightness-25"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-xl max-h-[80vh] px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Carousel Image */}
            <img
              src={images[selectedIndex]}
              alt={`Product Large ${selectedIndex + 1}`}
              className="w-full max-h-[70vh] object-contain rounded-lg"
            />

            {/* Previous Button */}
            <button
                onClick={prevImage}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full w-10 h-10 flex items-center justify-center"
                aria-label="Previous image"
                >
                <img src={prevIcon} alt="Previous" className="w-3 h-3" />
                </button>

                {/* Next Button */}
                <button
                onClick={nextImage}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full w-10 h-10 flex items-center justify-center"
                aria-label="Next image"
                >
                <img src={nextIcon} alt="Next" className="w-3 h-3" />
                </button>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-gray-300"
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
