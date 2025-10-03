
'use client'
import React from 'react'
import ProductInfo from './ProductInfo'

export default function HeroVideo(){
  return (
    <>
      <section className="relative h-[72vh] w-full overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.gif"
          alt="Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-start justify-center pt-16">
          <div className="max-w-4xl mx-auto p-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold">Experience BYKR</h1>
            <p className="mt-4 text-lg text-gray-300">Smart device. Fits many bikes.</p>
          </div>
        </div>
      </section>
      <ProductInfo />
      <div className="flex justify-center py-8">
        <a href="/bikes" className="px-6 py-3 bg-white text-black rounded-full font-semibold shadow">See compatible bikes</a>
      </div>

      {/* Embedded YouTube Video */}
      <div className="flex justify-center py-8">
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/yBbxZlui5sg?autoplay=1&mute=1&loop=1&playlist=yBbxZlui5sg&controls=0"
          title="Hold My Throttle Demo"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="rounded-lg shadow"
        ></iframe>
      </div>

      {/* Product Description Section */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">What Is Cruise Control?</h2>
        <p className="mb-4 text-lg text-gray-800">
          Cruise Control System on a motorcycle allows riders to maintain a SET speed without constantly operating the Throttle. This feature significantly reduces rider fatigue, especially on long journeys, by providing a consistent and effortless cruising experience. Electronic Cruise Control is a modern electronic feature that utilizes electronic controls to precisely manage the engine's output to maintain a desired SET speed.
        </p>
        <p className="mb-4 text-lg text-gray-800">
          So, Long rides? Tired wrists? Fatigue? Hold My Throttle brings Electronic Cruise Control to your Motorcycle, making your journeys smoother and effortless by keeping your Speed steady, so that you can focus on the road and the view.  With Hold My Throttle, Cruise Control comes to your Bike- Simple, Safe, and Easy to Use.
        </p>
        <h3 className="text-xl font-semibold mt-8 mb-2">How to use Hold My Throttle?</h3>
        <div className="flex justify-center mb-6">
          <img src="/images/holdmythrottle.avif" alt="Hold My Throttle" className="max-w-md w-full rounded-lg shadow" />
        </div>
        <h3 className="text-xl font-semibold mt-8 mb-2">Activating Cruise Control​</h3>
        <ul className="list-disc pl-6 mb-4 text-gray-800">
          <li>Press the SET button on the switch control to activate Cruise Control at the current speed.</li>
          <li>Press the RES button on switch control to activate Cruise Control at previous SET speed, works only when resume speed is stored.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-8 mb-2">Deactivating Cruise Control​</h3>
        <ul className="list-disc pl-6 mb-4 text-gray-800">
          <li>Brakes are Applied – Pressing the brake lever deactivates Cruise Control.</li>
          <li>Clutch is Engaged – Pressing the clutch lever deactivates Cruise Control.</li>
          <li>Throttle Override – Twisting the throttle beyond the set position overrides Cruise Control until released or till 20 seconds.</li>
          <li>Pressing the CANCEL Button – Manually deactivates Cruise Control.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-8 mb-2">When Cruise Control Won’t Engage​</h3>
        <ul className="list-disc pl-6 mb-4 text-gray-800">
          <li>The bike is in 1st gear or Neutral.</li>
          <li>Current Speed is less than 30 Kmph.</li>
          <li>Current Speed is greater than 140 kmph.</li>
          <li>The RPM is below 3000 RPM.</li>
          <li>The RPM is above 8500 RPM.</li>
          <li>The system is not receiving continuous data from the CAN bus.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-8 mb-2">So, How does Hold My Throttle Connect?</h3>
        <p className="mb-4 text-lg text-gray-800">
          Hold My Throttle connects to the motorcycle's throttle cable, and to the OBD II port to fetch the live information of Motorcycle
        </p>
        <div className="flex justify-center mb-6">
          <img src="/images/Connection_of_Hold_My_Throttle.avif" alt="Connection of Hold My Throttle" className="max-w-md w-full rounded-lg shadow" />
        </div>
      </div>
    </>
  )
}
