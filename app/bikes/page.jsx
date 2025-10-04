'use client'

import { useState, useRef, useEffect } from 'react'
import bikes from '../../data/bikes.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

function generateTxnId() {
  return 'txn_' + Math.random().toString(36).substr(2, 9)
}

export default function BikesPage() {
  const companies = Array.from(new Set(bikes.map(b => b.company)))
  const [selectedCompany, setSelectedCompany] = useState('')
  const [loadingBikeId, setLoadingBikeId] = useState(null) // Track loading by ID
  const formRef = useRef(null)
  const submissionInitiated = useRef(false) // Ref to prevent double submission

  const filteredBikes = selectedCompany
    ? bikes.filter(b => b.company === selectedCompany)
    : bikes

  const [payuForm, setPayuForm] = useState({
    key: '',
    txnid: '',
    amount: '',
    productinfo: '',
    firstname: '',
    email: '',
    phone: '',
    surl: '',
    furl: '',
    hash: ''
  })

  // This effect will run when payuForm state is updated with a new hash.
  // It reliably submits the form after the state has been applied.
  useEffect(() => {
    // Only submit if a hash exists and a submission hasn't already been initiated.
    if (payuForm.hash && !submissionInitiated.current) {
      submissionInitiated.current = true // Mark as initiated
      formRef.current.submit()
      // Reset loading state in case the user navigates back.
      setLoadingBikeId(null)
    }
  }, [payuForm.hash])

  async function handleBuyNow(bike) {
    // Reset submission flag and prevent multiple clicks
    submissionInitiated.current = false
    if (loadingBikeId) return // Prevent new clicks if a payment is already processing
    setLoadingBikeId(bike.id) // Set loading state for the specific bike

    const txnid = generateTxnId()
    const amount = '14999'
    const productinfo = bike.name
    const firstname = 'Customer Name'
    const email = 'customer@email.com'
    const phone = '9999999999'
    const surl = `${window.location.origin}/payment-success`
    const furl = `${window.location.origin}/payment-failure`
    
    let data;
    try {
      const res = await fetch('/api/generate-payu-hash', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ txnid, amount, productinfo, firstname, email })
      })
      data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to generate hash.')
    } catch (error) {
      console.error('Payment initiation failed:', error)
      alert(`Error: ${error.message}`)
      setLoadingBikeId(null) // Reset loading state on failure
      return
    }

    setPayuForm({
      key: data.key,
      txnid,
      amount,
      productinfo,
      firstname,
      email,
      phone,
      surl,
      furl,
      hash: data.hash
    })
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
              type="button"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded mt-4 w-32 disabled:bg-gray-400 disabled:cursor-not-allowed"
              onClick={() => handleBuyNow(bike)}
              // Disable if any bike is loading to prevent multiple transactions
              disabled={loadingBikeId !== null}
            >
              {loadingBikeId === bike.id ? 'Processing...' : 'Buy Now'}
            </button>
          </div>
        ))}
      </div>
      {/* Single hidden form for PayU submission */}
      <form
        ref={formRef}
        action="https://secure.payu.in/_payment"
        method="post"
        className="hidden"
      >
        <input type="hidden" name="key" value={payuForm.key} />
        <input type="hidden" name="txnid" value={payuForm.txnid} />
        <input type="hidden" name="amount" value={payuForm.amount} />
        <input type="hidden" name="productinfo" value={payuForm.productinfo} />
        <input type="hidden" name="firstname" value={payuForm.firstname} />
        <input type="hidden" name="email" value={payuForm.email} />
        <input type="hidden" name="phone" value={payuForm.phone} />
        <input type="hidden" name="surl" value={payuForm.surl} />
        <input type="hidden" name="furl" value={payuForm.furl} />
        <input type="hidden" name="hash" value={payuForm.hash} />
      </form>
    </main>
  )
}
