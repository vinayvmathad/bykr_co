'use client'
import React from 'react'

export default function HeroVideo(){
  return (
    <section className="relative h-[72vh] w-full overflow-hidden">
      {/* Replace /hero.mp4 with your own video placed in public/hero.mp4 */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero.mp4"
        poster="/poster.png"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-center">
        <div className="max-w-4xl mx-auto p-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Experience BYKR</h1>
          <p className="mt-4 text-lg text-gray-300">Smart device. Fits many bikes.</p>
          <div className="mt-6">
            <a href="#products" className="px-6 py-3 bg-white text-black rounded-full">See compatible bikes</a>
          </div>
        </div>
      </div>
    </section>
  )
}
