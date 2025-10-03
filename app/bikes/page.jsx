'use client'

import { useState } from 'react'
import bikes from '../../data/bikes.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default function BikesPage() {
  const companies = Array.from(new Set(bikes.map(b => b.company)))
  const [selectedCompany, setSelectedCompany] = useState('')

  const filteredBikes = selectedCompany
    ? bikes.filter(b => b.company === selectedCompany)
    : bikes

  // Razorpay payment handler
  function handlePayment(bike) {
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay key
      amount: 1499900, // ₹14,999 in paise
      currency: "INR",
      name: "BYKR Co.",
      description: bike.name,
      image: "/images/product.png",
      handler: function (response) {
        // Send response.razorpay_payment_id to your backend for verification
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id)
      },
      prefill: {
        name: "",
        email: "",
        contact: ""
      },
      theme: {
        color: "#F97316"
      }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  return (
    <main className="bg-gray-100 min-h-screen py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Compatible Bikes</h1>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <label className="font-semibold">Select Bike Company:</label>
        <select
          className="border rounded px-4 py-2"
          value={selectedCompany}
          onChange={e => setSelectedCompany(e.target.value)}
        >
          <option value="">All Companies</option>
          {companies.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {filteredBikes.map(bike => (
          <div key={bike.id} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <div className="w-full h-44 flex items-center justify-center mb-3">
              {bike.images && bike.images.length > 0 ? (
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  navigation
                  modules={[Navigation]}
                >
                  {bike.images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        alt={bike.name}
                        className="w-full h-44 object-contain bg-white p-2 rounded"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="w-full h-44 flex items-center justify-center bg-gray-200 rounded">
                  <span className="text-gray-500">No image available</span>
                </div>
              )}
            </div>
            <div className="text-lg font-bold text-center">{bike.name}</div>
            <div className="text-gray-600 text-center">{bike.company}</div>
            <div className="text-xl font-bold text-center mt-2">₹14,999</div>
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded mt-4"
              onClick={() => handlePayment(bike)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}
