import React, { FC } from 'react'

type ButtonType = {
  title: string
  callback?: () => void
}

export const Button: FC<ButtonType> = ({ title, callback }) => {
  const onClickHandler = () => {
    if (callback) {
      callback()
    }
  }

  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded mt-4 mx-auto block"
      onClick={onClickHandler}
    >
      {title}
    </button>
  )
}
