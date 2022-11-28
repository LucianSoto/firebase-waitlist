import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Modal = ({showModal, closeModal, modalItem, onDelete }) => {
  // const [listItem, setListItem] = useState(modalItem)
  const navigate = useNavigate()

  const buttonStyles = {
    padding: "6px 16px 8px 16px",
    marginBottom: 20,
    color: "whitesmoke",
    width: 130,
    height: 50,
    fontSize: 25,
    fontWeight: 700,
    borderRadius: 30, 
    textAlign: "center",
    cursor: "pointer"
  }

  return (
    <div 
      id="backdrop" 
      className='fixed w-full h-full z-10 bg-gray-900 bg-opacity-75 flex-col items-center justify-center '
      style={{display: showModal ? 'flex' : 'none'}}
    >
      <p 
        id="close" 
        className='flex  w-10 h-10 mb-2 self-end mr-16 w-full z-10 text-xl border-solid border-4 rounded-full border-gray-300 flex items-center justify-center font-bold text-gray-300 hover:border-gray-200 hover:text-gray-200 hover:shadow-sm cursor-pointer'
        onClick={()=> closeModal()}
      >X</p>
      <div id="menu" className='relative inset-0 z-10 overflow-y-auto bg-gray-100 w-3/4 rounded-lg p-8 flex flex-col items-center justfy-center' >
        <h3 className='text-3xl font-bold mb-8'>What would you like to do {modalItem.name}'s party?</h3>
        <p 
          id="text"  
          className='bg-green-400 hover:bg-green-500' 
          style={buttonStyles}
        >Message</p>
        <p 
          id="edit" 
          className='bg-amber-400 hover:bg-amber-500' 
          style={buttonStyles}
          onClick={()=> navigate(`/edit/${modalItem.id}`)}
        >Edit</p>
        <p 
          id="del" 
          className='bg-red-400 hover:bg-red-500' 
          style={buttonStyles}
          onClick={() => onDelete(modalItem)}
        >Delete</p>
      </div>
    </div>
  )
}

export default Modal
