import React, { useState, useEffect } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

const ListItem = ({id, name, ofAge, size, phone, key, showModal}) => {


  return (
    <div className='grid grid-cols-[2fr_1fr_1fr_.3fr] items-center border-b-2 my-4 w-11/12 pb-2' key={key} >
           <p className="name pl-4">{name}</p>
           {/* <p className="phone">{phone}</p> */}
           <p className="size">{size}</p>
           <p className="of-age">{ofAge ? 'Bar' : 'Main'}</p>
           {/* <FaCheck/> */}
           <div id='dd-menu'>
            <BsThreeDotsVertical  onClick={(e)=> {
              console.log(phone)
              showModal(e, phone, name)
            }} className=''/>
           </div>
         </div>
  )
}

export default ListItem
