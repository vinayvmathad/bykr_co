'use client'
import { useState } from 'react'
import bikes from '../../data/bikes.json'

export default function BikesPage() {
  const companies = Array.from(new Set(bikes.map(b => b.company)))
  const [selectedCompany, setSelectedCompany] = useState('')

  const filteredBikes = selectedCompany ? bikes.filter(b => b.company === selectedCompany) : bikes

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Compatible Bikes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 mb-8 justify-center">
          <label className="font-semibold">Select Bike Company:</label>
          <select
            value={selectedCompany}
            onChange={e => setSelectedCompany(e.target.value)}
            className="px-4 py-2 rounded border border-gray-300 bg-white text-black"
          >
            <option value="">All Companies</option>
            {companies.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredBikes.map(bike => (
            <div key={bike.id} className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
              <div className="w-full h-44 bg-white flex items-center justify-center rounded mb-3">
                <img src={bike.image} alt={bike.name} className="max-h-full max-w-full object-contain p-2" />
              </div>
              <h3 className="mt-1 font-semibold text-center">{bike.name}</h3>
              <p className="text-sm text-gray-700 text-center mb-2">{bike.company}</p>
              <div className="mt-auto text-lg font-bold">₹14,999</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
