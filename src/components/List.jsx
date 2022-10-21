import React, { useState, useEffect, useRef } from 'react'
import ListItem from './ListItem'
import { FaCheck } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { collection, getDocs, doc, query, where} from 'firebase/firestore'
import { db } from '../firebase.config'
import Modal from './Modal'

const List = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [modal, setModal] = useState(false)
  const [list, setList] = useState()
  const mounted = useRef(false)
  const [modalItem, setModalItem] = useState()
  
  useEffect(()=> {
    // if(mounted.current === false) {
    //   console.log('hi')
    //   fetchList() 
    //   mounted.current = true
    // }
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

  const showModal = (e, phone, name) => {
    e.preventDefault()
    setModal(!modal)
    setModalItem({phone: phone, name: name})
    console.log(phone, name, ' modal Item')
  }

  const closeModal = () => {
    setModal(!modal)
  }
  
  return (
    <>
    <div className='flex flex-col items-center bg-gray-100 h-5/6 w-5/6 rounded-md shadow-lg p-4 mb-8'>
      {list ? 
      list.map((item, i) => {
        return (
          <ListItem
            // id={item.id}
            key={i}
            name={item.name}
            size={item.size}
            ofAge={item.ofAge}
            phone={item.phone}
            showModal={showModal}
          />
         )
       }) 
       :
       "laoding..."
      }
    </div>
    <Modal showModal={modal} modalItem={modalItem} closeModal={closeModal}/>
    </>
  )
}

export default List
