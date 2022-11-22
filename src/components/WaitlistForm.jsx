import React, { useState }from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { useNavigate } from 'react-router-dom'
// import { v4 as uuidv4 } from 'uuid'

const WaitlistForm = ({closeForm}) => {
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    size: 1,
    ofAge: false,
  })
  
  const formStyles = {
    input : 'w-3/4 px-4 py-2 mb-6 rounded-lg text-xl',
    label : 'w-3/4 pl-2 mb-2 text-xl' 
  }

  const onChange = (e) => {
    const {name, value, } = e.target
      setFormData((prevState) => ({
        ...prevState, [name]: value
      }))
    }


  const submitForm = async (e) => {
    e.preventDefault()
    const dataCopy = {
      ...formData,
      timestamp: serverTimestamp()
    }
    const waitlistRef = await addDoc(collection(db, 'waitlist-1'), dataCopy)
    await closeForm(e)
    navigate("/firebase-waitlist")
  }

  return (
    <form
      id="form" 
      className='flex flex-col items-center bg-gray-100  w-5/6 rounded-md shadow-lg p-4 mb-8'
      onSubmit={submitForm}
    >
      <h3 className='text-2xl font-medium mt-8 mb-8'>
        Join out waitlist
      </h3>
      <label className={formStyles.label} htmlFor="name">Full Name</label>
      <input 
        type="text" 
        name="name"
        id="name"
        className={formStyles.input}
        placeholder="Name"
        value={formData.name}
        maxLength='25'
        minLength='2'
        onChange={onChange}
      />
      <label className={formStyles.label} htmlFor="phone">Phone</label>
      <input 
        type="text" 
        name="phone"
        id="phone"
        className={formStyles.input}
        placeholder="123456789"
        value={formData.phone}
        maxLength='10'
        minLength='7'
        onChange={onChange}
      />
      <div id="other-options" className='w-3/4 flex justify-around mt-6 mb-4'>
        <span className='flex w-3/8 '>
          <label className={formStyles.label} htmlFor="size">Size</label>
          <select 
            className='h-8 text-lg px-2 ml-4'
            name="size" 
            id="size" 
            value={formData.size} 
            onChange={onChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </span>
        <span className='flex  w-1/4 mr-4'>
          <label className={formStyles.label} htmlFor="ofAge">Over 21</label>
          <input 
            // className="w-8 h-8" to style with tailwind would have to download @tailwind/forms 
            style={{height: 25, width: 25, marginTop: 3 }}
            name="ofAge"
            type="checkbox"
            className='checkbox'
            checked={formData.ofAge}
            onChange={() =>setFormData(prevState => ({
              ...prevState, ofAge: !prevState.ofAge
            }))}
          />
        </span>
      </div>
      <button type='submit'
        className='bg-purple-300 hover:bg-purple-400 mb-8 shadow-md hover:cursor-pointer         hover:shadow-lg px-8 py-4 text-xl uppercase font-bold text-gray-100 rounded-full' id="submit">Submit</button>
    </form>
  )
}

export default WaitlistForm
