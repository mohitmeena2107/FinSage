import React from 'react'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-lvh px-4 text-center'>
        <h1 className='text-6xl font-bold gradient-title mb-4'>404</h1>
        <h2 className='text-2xl font-semibold  mb-4'>Page Not Found</h2>
        <p>The Page Doesn't exist</p>
    </div>
  )
}

export default NotFound