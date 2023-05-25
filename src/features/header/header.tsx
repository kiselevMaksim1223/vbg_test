import React from 'react'

import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto">
        <Link to={'/'}>
          <h1 className="text-white text-2xl">VBG-Test</h1>
        </Link>
      </div>
    </header>
  )
}
