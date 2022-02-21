import React from 'react'
import './Model.css'

export default function Model({ children }) {
  return (
    <div className='model-backdrop'>
      <div className='model'>
        {children}
      </div>
    </div>
  )
}
