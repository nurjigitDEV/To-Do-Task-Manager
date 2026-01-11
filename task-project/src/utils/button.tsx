import React from 'react'

const noop = () => {}

type TProps = {
  text?: string
  bg?: string
  bgHover?: string
  onClick?: () => void
  // onClick?: React.MouseEventHandler<HTMLButtonElement>
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ text = 'click', bg, bgHover, onClick = noop }: TProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      className={`border border-black rounded-md px-[4px] py-[3px] text-[18px] hover:text-white ${bg} ${bgHover}`}
    >
      {text}
    </button>
  )
}
