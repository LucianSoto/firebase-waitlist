import React, { useState, useEffect, useRef } from 'react'
// import { dummyData } from './dummyListData'
import { FaCheck } from 'react-icons/fa'
import { collection, getDocs, doc, query, where} from 'firebase/firestore'
import { db } from '../firebase.config'

const List = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [list, setList] = useState()
  const mounted = useRef(false)
  
  useEffect(()=> {
    // if(mounted.current === false) {
    //   console.log('hi')
    //   fetchList() 
    //   mounted.current = true
    // }
    console.log('hi')
    const fetchList = async () => {
        const q = query(collection(db, 'waitlist-1'))
    
        const querySnap = await getDocs(q)
    
        let listArr = []
    
        querySnap.forEach((doc) => {
          return listArr.push(
            doc.data()
          )
        })
        
        setList(listArr)
        setIsLoading(false)
    }
    fetchList()
  },[])

  
  return (
    <div className='flex flex-col items-center bg-gray-100 h-5/6 w-5/6 rounded-md shadow-lg p-4'>
      {list ? 
      list.map((item, i) => {
        return (
         <div className='grid grid-cols-[2fr_1fr_1fr_.5fr] items-center border-b-2 my-4 w-11/12 pb-2' key={i}>
           <p className="name pl-4">{item.name}</p>
           {/* <p className="phone">{item.phone}</p> */}
           <p className="size">{item.size}</p>
           <p className="of-age">{item.ofAge ? 'Bar' : 'Main'}</p>
           <FaCheck/>
         </div>
         )
       }) 
       :
       "laoding..."
      }
    </div>
  )
}

export default List
