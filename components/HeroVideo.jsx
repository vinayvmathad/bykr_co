'use client'
import React from 'react'

export default function HeroVideo(){
  return (
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
          <div className="mt-6">
            <a href="#products" className="px-6 py-3 bg-white text-black rounded-full">See compatible bikes</a>
          </div>
        </div>
      </div>
    </section>
  )
}
