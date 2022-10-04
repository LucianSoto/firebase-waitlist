import React from 'react'
import { dummyData } from './dummyListData'
import { FaCheck } from 'react-icons/fa'


const List = () => {

  const listData = dummyData.map((item, i) => {
    return (
    <div className='grid grid-cols-[2fr_1fr_1fr_.5fr] items-center border-b-2 my-4 w-11/12 pb-2' key={i}>
      <p className="name pl-4">{item.name}</p>
      {/* <p className="phone">{item.phone}</p> */}
      <p className="size">{item.partySize}</p>
      <p className="of-age">{item.ofAge ? 'Bar' : 'Main'}</p>
      <FaCheck/>
    </div>
    )
  })

  console.log(listData, 'listData')
  return (
    <div className='flex flex-col items-center bg-gray-100 h-5/6 w-5/6 rounded-md shadow-lg p-4'>
      {listData}
    </div>
  )
}

export default List
