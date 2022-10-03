import React from 'react'
import { dummyData } from './dummyListData'
import { FaCheck } from 'react-icons/fa'


const List = () => {

  const listData = dummyData.map((item, i) => {
    return (
    <div style={{display: 'grid', gridTemplateColumns: '4fr 1fr 1fr 1fr' }} key={i}>
      <p className="name">{item.name}</p>
      {/* <p className="phone">{item.phone}</p> */}
      <p className="size">{item.partySize}</p>
      <p className="of-age">{item.ofAge ? 'Bar' : 'Main'}</p>
      <FaCheck/>
    </div>
    )
  })

  console.log(listData, 'listData')
  return (
    <div className='flex flex-col bg-gray-100 h-5/6 w-5/6 rounded-md shadow-lg'>
      {listData}
    </div>
  )
}

export default List
