import React, { useState, useEffect, useRef } from 'react'
import ListItem from './ListItem'
import { FaCheck } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { collection, getDocs, doc, query, where, deleteDoc, getDoc, orderBy} from 'firebase/firestore'
import { db } from '../firebase.config'
import Modal from './Modal'
import { Link } from 'react-router-dom'
// import { get } from 'immer/dist/internal'

const List = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [modal, setModal] = useState(false)
  const [list, setList] = useState([])
  const mounted = useRef(false)
  const [modalItem, setModalItem] = useState()
  
  useEffect(()=> {
    if(mounted.current === false) {
      fetchList() 
      mounted.current = true
    }
    // fetchList()
  },[])
  
  const fetchList = async () => {
      const q = query(collection(db, 'waitlist-1'), orderBy("timestamp"))
      const querySnap = await getDocs(q)
      let listArr = []
  
      querySnap.forEach((doc) => {
        const id = doc.id
        const newDoc = doc.data()
        newDoc["id"] = id
        return listArr.push(
          newDoc  
        )
      }) 
      setList(listArr)
      setIsLoading(false)
  }

  const showModal = (e, phone, name, id) => {
    e.preventDefault()
    setModal(!modal)
    setModalItem({ phone: phone, name: name, id: id })
  }

  const closeModal = (e) => {
    setModal(!modal)
  }

  const onDelete = async () => {
    const docRef = doc(db, 'waitlist-1', modalItem.id)
    await deleteDoc(docRef)
    closeModal()
    fetchList()
  }


  return (
    <>
    <Link 
      id="button" 
      to={'/waitlist-form'}
      className={`py-2 px-8 mt-2 mb-8 bg-green-400  hover:bg-green-500 shadow-md hover:shadow-lg rounded-full text-lg uppercase tracking-widest text-gray-100 font-bold`}>
        Join
    </Link>
    <div className='flex flex-col items-center bg-gray-100 h-5/6 w-5/6 rounded-md shadow-lg p-4 mb-8'>
      { list.length > 0  ? 
      list.map((item, i) => {
        return (
          <ListItem
            id={item.id}
            name={item.name}
            size={item.size}
            ofAge={item.ofAge}
            phone={item.phone}
            showModal={showModal}
            key={i}
          />
         )
       }) 
       : <h3>Please join our waitlist!</h3>
      }
    </div>
    {modal &&
    <Modal showModal={modal} modalItem={modalItem} closeModal={closeModal} onDelete={onDelete}/>
    }
    </>
  )
}

export default List
