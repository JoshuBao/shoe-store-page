'use client'
import { useState } from 'react';
import Star from '../components/Star';

const Product = () => {
  const [selectedSize, setSelectedSize] = useState('');

  const sizes = ['M 4.5 / W 6.0', 'M 5.0 / W 6.5', 'M 5.5 / W 7.0', 'M 6.0 / W 7.5', 'M 6.5 / W 8.0', 'M 7.0 / W 8.5', 'M 7.5 / W 9.0', 'M 8.0 / W 9.5'];

  return (
    <div className="container mx-auto p-4 min-h-screen flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex justify-center">
          <img src="/shoe.png" alt="SPLITSTEP Court Burst" className="w-3/4 rounded-lg shadow-lg bg-gray-" />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">SPLITSTEP Court </h1>
          <p className="text-2xl text-gray-700">$149.95</p>
          <p className="text-gray-600">Preorder available. Will be back in stock by 7/3/24.</p>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <Star key={index} filled={true} />
            ))}
            <span className="text-md font-thin ml-2">139 Reviews</span>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Size</h2>
            <div className="grid grid-cols-4 gap-2">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  className={`btn ${selectedSize === size ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button className="btn btn-primary w-full">Pre Order</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
