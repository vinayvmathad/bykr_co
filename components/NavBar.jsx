'use client'
import { useState, useEffect } from 'react'
import CompatibilityDropdown from './CompatibilityDropdown'
import Image from 'next/image'

export default function NavBar(){
  const [instagramUrl,setInstagramUrl] = useState('https://www.instagram.com/bykr_co?igsh=MWZtajIwZTN5aDZyZw==')
  const social = [
    { id: 'insta', label: 'Instagram', url: instagramUrl },
    { id: 'youtube', label: 'YouTube', url: 'https://m.youtube.com/@bykr_co?fbclid=PAT01DUANMGJpleHRuA2FlbQIxMAABpx8vQjsHWjRQ0lGUDveue8PZanhwFtfCmF9eLJGn9rYCzSl0DHt2n95qGGut_aem_g6_SRYu5mzsAMqOIrbtOlw' },
    { id: 'x', label: 'X', url: 'https://x.com/BYKR_Co' },
    { id: 'facebook', label: 'Facebook', url: 'https://facebook.com/' },
  ]
  const [selected, setSelected] = useState('')

  useEffect(()=>{},[])

  return (
    <header className="sticky top-0 z-50 bg-orange-900 border-b border-orange-900">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between p-2 sm:p-4 gap-2 sm:gap-0">
        <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start">
          <a href="/" className="text-xl sm:text-2xl font-bold text-black">BYKR</a>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center sm:justify-end mt-2 sm:mt-0">
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
                <div className={"w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border border-black bg-transparent "+(selected===s.id? '':'')}> 
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
