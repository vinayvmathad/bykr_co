'use client'
import Image from 'next/image'

export default function ProductInfo() {
  return (
    <section className="bg-black text-white py-12 flex flex-col md:flex-row items-center justify-center gap-8">
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          <span className="text-orange-500 font-bold italic">Hold My Throttle</span> brings<br/>
          Effortless Plug & Play <span className="text-orange-500 font-bold italic">Electronic Cruise Control</span><br/>
          for your Motorcycle,<br/>
          redefining the way you ride<br/>
          with unmatched Comfort,<br/>
          Precision and Functionality.
        </h2>
      </div>
      <div className="flex justify-center items-center">
        <Image src="/images/modem.avif" alt="BYKR Co. Product" width={300} height={300} className="rounded-lg bg-white" />
      </div>
    </section>
  )
}
