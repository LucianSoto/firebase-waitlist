import React, { useState, useEffect } from 'react'
// import { dummyData } from './dummyListData'
import { FaCheck } from 'react-icons/fa'
import { collection, getDocs, doc, query, where} from 'firebase/firestore'
import { db } from '../firebase.config'

const List = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [list, setList] = useState()
  
  useEffect(()=> {
    console.log('hi')
    fetchList() 
  },[])
  
  const fetchList = async () => {
    // const res = await getDocs(collection(db, 'waitlist-1'))
    //   console.log(res.docs)
    // const data = res.data
    const q = query(collection(db, 'waitlist-1'), where("ofAge", "==", true))

    const querySnapshot = await getDocs(q)

    console.log(querySnapshot.docs[0]._document, 'querysmap')
    querySnapshot.forEach((doc) => {
      console.log(doc.data)
    })
    

  }

  // const listData = dummyData.map((item, i) => {
  //   return (
  //   <div className='grid grid-cols-[2fr_1fr_1fr_.5fr] items-center border-b-2 my-4 w-11/12 pb-2' key={i}>
  //     <p className="name pl-4">{item.name}</p>
  //     {/* <p className="phone">{item.phone}</p> */}
  //     <p className="size">{item.partySize}</p>
  //     <p className="of-age">{item.ofAge ? 'Bar' : 'Main'}</p>
  //     <FaCheck/>
  //   </div>
  //   )
  // })

  return (
    <div className='flex flex-col items-center bg-gray-100 h-5/6 w-5/6 rounded-md shadow-lg p-4'>
      {/* {listData} */}
    </div>
  )
}

export default List
