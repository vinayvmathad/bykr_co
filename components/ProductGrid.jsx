import products from '../data/products.json'
import bikes from '../data/bikes.json'
import { useState } from 'react'

export default function ProductGrid(){
  const [showBikes, setShowBikes] = useState(false);

  return (
    <div id="products" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-gray-100 min-h-screen py-8">
      <div className="col-span-3 flex justify-center mb-8">
        <button
          className="px-6 py-3 bg-orange-200 text-black rounded-full font-semibold shadow"
          onClick={() => setShowBikes(true)}
        >
          See compatible bikes
        </button>
      </div>
      {showBikes
        ? bikes.map(bike => (
            <div key={bike.id} className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
              <img src={bike.image} alt={bike.name} className="w-full h-44 object-cover rounded mb-3" />
              <h3 className="mt-1 font-semibold text-center">{bike.name}</h3>
              <p className="text-sm text-gray-700 text-center mb-2">{bike.company}</p>
              <div className="mt-auto text-lg font-bold">₹14,999</div>
            </div>
          ))
        : products.map(p => (
            <div key={p.id} className="bg-white p-4 rounded-lg shadow">
              <img src={p.image} alt={p.title} className="w-full h-44 object-cover rounded"/>
              <h3 className="mt-3 font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-700">{p.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-lg">₹{(p.price_cents/100).toFixed(2)}</div>
                <button className="px-3 py-1 bg-orange-200 text-black rounded">Add</button>
              </div>
            </div>
          ))}
    </div>
  )
}
