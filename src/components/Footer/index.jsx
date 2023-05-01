import React, { useContext, useEffect, useState } from 'react'
import Context from '../../Context/Themes'
import './index.css'

export default function Footer () {
  const { Themes } = useContext(Context)
  const [year, setYear] = useState()
  useEffect(() => {
    const yearTime = new Date()
    setYear(yearTime.getFullYear())
  }, [])
  return (
    <footer className='text-center flex items-center sm:justify-end justify-center py-12 w-full relative' style={{ overflow: 'hidden' }}>
      <div className='flex items-center z-[1]'>
        <h5 className='font-normal text-xs' style={{ color: Themes.text }}>Jonathan Molero - Fullstack Developer | {year}</h5>
      </div>
    </footer>
  )
}
