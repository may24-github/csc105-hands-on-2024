import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FavouritesPage() {
  const [number, setNumber] = useState('');
  const [q, setQ] = useState('');
  const [size, setSize] = useState('');
  const [numberError, setNumberError] = useState('Expected number, received NaN');
  const [qError, setQError] = useState("Select either 'love' or 'like'");
  const [sizeError, setSizeError] = useState('Select a valid size');
  const navigate = useNavigate();

  const validateNumber = (value) => {
    if (!value || isNaN(value) || value < 1 || value > 100) {
      setNumberError('Expected number, received NaN');
      return false;
    }
    setNumberError('');
    return true;
  };

  const validateQ = (value) => {
    if (value !== 'love' && value !== 'like') {
      setQError("Select either 'love' or 'like'");
      return false;
    }
    setQError('');
    return true;
  };

  const validateSize = (value) => {
    if (value !== 'small' && value !== 'medium' && value !== 'large') {
      setSizeError('Select a valid size');
      return false;
    }
    setSizeError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNumberValid = validateNumber(number);
    const isQValid = validateQ(q);
    const isSizeValid = validateSize(size);

    if (isNumberValid && isQValid && isSizeValid) {
      // Navigate to the FavouriteDetailPage with query parameters
      navigate(`/favourites/${number}?q=${q}&size=${size}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Favourites Form</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Number Input */}
          <div>
            <label htmlFor="number" className="block text-sm font-medium text-gray-700">
              Number (1-100)
            </label>
            <input
              type="number"
              id="number"
              name="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              onBlur={(e) => validateNumber(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
            {numberError && <p className="mt-1 text-sm text-red-500">{numberError}</p>}
          </div>

          {/* Q Select */}
          <div>
            <label htmlFor="q" className="block text-sm font-medium text-gray-700">
              Q (Love or Like)
            </label>
            <select
              id="q"
              name="q"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onBlur={(e) => validateQ(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            >
              <option value="">Select</option>
              <option value="love">Love</option>
              <option value="like">Like</option>
            </select>
            {qError && <p className="mt-1 text-sm text-red-500">{qError}</p>}
          </div>

          {/* Size Select */}
          <div>
            <label htmlFor="size" className="block text-sm font-medium text-gray-700">
              Size (Small, Medium, Large)
            </label>
            <select
              id="size"
              name="size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              onBlur={(e) => validateSize(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            >
              <option value="">Select</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            {sizeError && <p className="mt-1 text-sm text-red-500">{sizeError}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FavouritesPage;