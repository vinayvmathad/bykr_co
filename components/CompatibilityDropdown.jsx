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

  return null
}
