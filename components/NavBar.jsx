'use client'
import { useState, useEffect } from 'react'
import CompatibilityDropdown from './CompatibilityDropdown'
import Image from 'next/image'

export default function NavBar(){
  const [instagramUrl,setInstagramUrl] = useState('https://www.instagram.com/bykr_co?igsh=MWZtajIwZTN5aDZyZw==')
  const social = [
    { id: 'insta', label: 'Instagram', url: instagramUrl },
    { id: 'youtube', label: 'YouTube', url: 'https://m.youtube.com/@bykr_co?fbclid=PAT01DUANMGJpleHRuA2FlbQIxMAABpx8vQjsHWjRQ0lGUDveue8PZanhwFtfCmF9eLJGn9rYCzSl0DHt2n95qGGut_aem_g6_SRYu5mzsAMqOIrbtOlw' },
    { id: 'x', label: 'X', url: 'https://x.com/' },
    { id: 'facebook', label: 'Facebook', url: 'https://facebook.com/' },
  ]
  const [selected, setSelected] = useState('')

  useEffect(()=>{},[])

  return (
    <header className="sticky top-0 z-50 bg-orange-200 border-b border-orange-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <a href="/" className="text-2xl font-bold text-black">BYKR</a>
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
                    window.open(s.url, '_blank')
                  }}
                />
                <div className={"w-9 h-9 rounded-full flex items-center justify-center border border-black bg-transparent "+(selected===s.id? '':'')}> 
                  <span className="text-xs font-bold text-black">{s.label[0]}</span>
                </div>
              </label>
            ))}
          </form>
        </div>
      </div>
    </header>
  )
}
