import React, { useState } from 'react'
// import { doc, deleteDoc } from 'firebase/firestore'
// import { db } from '../firebase.config'
import { useEffect } from 'react'


const Modal = ({showModal, closeModal, modalItem, onDelete }) => {
  const [listItem, setListItem] = useState(modalItem)

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
      className='fixed w-full h-full z-10 bg-gray-900 bg-opacity-75 flex items-center justify-center'
      style={{display: showModal ? 'flex' : 'none'}}
    >
      <div id="menu" className='relative inset-0 z-10 overflow-y-auto bg-gray-100 w-3/4 rounded-lg p-8 flex flex-col items-center justfy-center' >
        <p 
        id="close" 
          className=' w-8 h-8 relative float-right -left-64  -top-4 z-100 text-xl border-solid border-4 rounded-full border-gray-500 flex items-center justify-center font-bold text-gray-500 hover:border-gray-600 hover:text-gray-600 hover:shadow-sm cursor-pointer'
          onClick={()=> closeModal()}
        >X</p>
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
