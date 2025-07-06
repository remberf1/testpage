
import Navbar from './assets/components/Navbar';
import ImageGallery from './assets/components/ImageGallery';
import { useState } from 'react';
import image1 from './assets/images/image-product-1.jpg';
import image2 from './assets/images/image-product-2.jpg';
import image3 from './assets/images/image-product-3.jpg';
import image4 from './assets/images/image-product-4.jpg';
import plusIcon from './assets/images/icon-plus.svg';
import minusIcon from './assets/images/icon-minus.svg';
import cartIcon from './assets/images/icon-cart.svg';

function App() {
  const [quantity, setQuantity] = useState(1);
  // Cart state: number of items added
  const [cartQuantity, setCartQuantity] = useState(0);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const addToCart = () => {
    setCartQuantity(cartQuantity + quantity);
    setQuantity(1); 
  };

  return (
    <>
      <Navbar cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />

      <div className="mt-7 p-4 md:p-8 max-w-6xl mx-auto flex flex-col md:flex-row md:gap-x-12">
        {/* Image Gallery */}
        <div className="md:w-1/2">
          <ImageGallery images={[image1, image2, image3, image4]} />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col justify-center">
          <h4 className="text-sm uppercase text-gray-500 font-bold mb-2">Sneaker Company</h4>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Fall Limited Edition Sneakers</h2>
          <p className="text-gray-600 mb-6">
            These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>

          {/* Price Section */}
          <div className="mb-6">
            <div className="flex items-center gap-4">
              <p className="text-2xl font-bold text-gray-800">$125.00</p>
              <span className="bg-black text-white font-bold px-2 py-1 rounded text-sm">50%</span>
            </div>
            <p className="line-through text-gray-400 text-sm mt-1">$250.00</p>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Quantity Selector */}
            <div className="flex items-center justify-between border rounded-md px-4 py-2 w-full sm:w-1/3">
              <button onClick={decrease} className="p-1">
                <img src={minusIcon} alt="minus" />
              </button>
              <span className="font-semibold">{quantity}</span>
              <button onClick={increase} className="p-1">
                <img src={plusIcon} alt="plus" />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={addToCart}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow-sm flex items-center justify-center gap-3 w-full sm:w-2/3"
            >
              <img src={cartIcon} alt="cart" className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
