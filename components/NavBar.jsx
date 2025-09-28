'use client'
import { useState, useEffect } from 'react'
import CompatibilityDropdown from './CompatibilityDropdown'
import Image from 'next/image'

export default function NavBar(){
  const [instagramUrl,setInstagramUrl] = useState('https://instagram.com/')
  const social = [
    { id: 'insta', label: 'Instagram', url: instagramUrl },
    { id: 'youtube', label: 'YouTube', url: 'https://youtube.com/' },
    { id: 'x', label: 'X', url: 'https://x.com/' },
    { id: 'facebook', label: 'Facebook', url: 'https://facebook.com/' },
  ]
  const [selected, setSelected] = useState('')

  useEffect(()=>{},[])

  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold">BYKR</div>
          <CompatibilityDropdown />
        </div>

        <div className="flex items-center gap-3">
          {/* Social media radio-like buttons */}
          <form className="flex gap-2 items-center">
            {social.map(s => (
              <label key={s.id} className="cursor-pointer">
                <input
                  type="radio"
                  name="social"
                  value={s.id}
                  className="sr-only"
                  onChange={()=>{
                    setSelected(s.id)
                    // open in new tab
                    window.open(s.url, '_blank')
                  }}
                />
                <div className={"w-9 h-9 rounded-full flex items-center justify-center border "+(selected===s.id? 'border-white':'border-white/30')}>
                  <span className="text-xs">{s.label[0]}</span>
                </div>
              </label>
            ))}
          </form>
        </div>
      </div>
    </header>
  )
}
