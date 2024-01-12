import React from 'react'
import Card from '../components/dashboard/Card'

const dashboard = () => {
  return (
    <div className='h-screen'>
      <div className='flex justify-between items-center'>
      <Card/>
      <Card/>
      <Card/>
    </div>
    </div>
  )
}

export default dashboard
