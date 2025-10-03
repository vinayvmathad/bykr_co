
'use client'
import bikes from '../data/bikes.json'
import { useState } from 'react'

export default function ProductGrid(){
  const [showBikes, setShowBikes] = useState(false);

  return (
    <div id="products" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-gray-100 min-h-screen py-8">
      {/* ...existing code... */}
      {bikes.map(bike => (
        <div key={bike.id} className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
          <img src={bike.image} alt={bike.name} className="w-full h-44 object-cover rounded mb-3" />
          <h3 className="mt-1 font-semibold text-center">{bike.name}</h3>
          <p className="text-sm text-gray-700 text-center mb-2">{bike.company}</p>
          <div className="mt-auto text-lg font-bold">₹14,999</div>
        </div>
      ))}
    </div>
  )
}
