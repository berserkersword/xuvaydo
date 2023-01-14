import React from 'react'

const OutlineButton = (props:{text:string,action?:React.MouseEventHandler<HTMLButtonElement>}) => {
  return (
      <button
        type="button"
        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2   "
        onClick={props.action}
      >
          {props.text}
      </button>
  )
}

export default OutlineButton