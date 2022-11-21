import React, { useState, useEffect, useRef } from 'react'
import ListItem from './ListItem'
import { FaCheck } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { collection, getDocs, doc, query, where, deleteDoc, getDoc} from 'firebase/firestore'
import { db } from '../firebase.config'
import Modal from './Modal'
// import { get } from 'immer/dist/internal'

const List = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [modal, setModal] = useState(false)
  const [list, setList] = useState([])
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
          const id = doc.id
          console.log(doc.id)
          return listArr.push(
            doc.data() 
          )
        }) 
        setList(listArr)
        console.log(listArr, 'list arr')
        setIsLoading(false)
    }
    fetchList()
  },[])

  const showModal = (e, phone, name, id) => {
    e.preventDefault()
    setModal(!modal)
    setModalItem({ phone: phone, name: name, id: id })
  }

  const closeModal = () => {
    console.log('closing modal')
    setModal(!modal)
  }

  const onDelete = async () => {
    console.log(modalItem.name)
    const name = modalItem.name
    const collectionRef = collection(db, 'waitlist-1')
    const q = query(collectionRef, where("name", "==", name))
    const snapshot = await getDocs(q)

    const result = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

    console.log(result)
  }

  return (
    <>
    <div className='flex flex-col items-center bg-gray-100 h-5/6 w-5/6 rounded-md shadow-lg p-4 mb-8'>
      { list.length > 0  ? 
      list.map((item, i) => {
        console.log(item, )
        return (
          <ListItem
            id={i}
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
