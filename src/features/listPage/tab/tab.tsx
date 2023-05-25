import React, { FC } from 'react'

type TabType = {
  label: string
  isActive: boolean
  onClick: () => void
}

export const Tab: FC<TabType> = ({ label, isActive, onClick }) => (
  <button
    className={`sm:px-8 px-3 py-2 rounded-t-lg ${
      isActive ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
    }`}
    onClick={onClick}
  >
    {label}
  </button>
)
