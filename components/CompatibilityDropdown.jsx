'use client'
import { useState, useEffect } from 'react'
import bikesData from '../data/bikes.json'

export default function CompatibilityDropdown(){
  const companies = Array.from(new Set(bikesData.map(b=>b.company)))
  const [company, setCompany] = useState('')
  const [query, setQuery] = useState('')
  const [models, setModels] = useState([])

  useEffect(()=>{
    if(!company){ setModels([]); return }
    setModels(bikesData.filter(b=>b.company===company))
  },[company])

  return (
    <div className="flex items-center gap-3">
      <select value={company} onChange={(e)=>setCompany(e.target.value)} className="bg-white/5 border border-white/10 px-3 py-2 rounded text-white">
        <option value="">Select Company</option>
        {companies.map(c=> <option key={c} value={c}>{c}</option>)}
      </select>

      <input
        type="text"
        placeholder="Type bike name"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        className="bg-white/5 border border-white/10 px-3 py-2 rounded text-white"
      />
      <div className="absolute mt-12 bg-black/80 max-h-40 overflow-auto w-60 rounded shadow-lg">
        {models.filter(m=> m.name.toLowerCase().includes(query.toLowerCase())).map(m=>(
          <div key={m.id} className="p-2 border-b border-white/5">{m.name}</div>
        ))}
      </div>
    </div>
  )
}
