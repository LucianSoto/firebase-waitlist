import React, { useState }from 'react'

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
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

      console.log(formData)
      setFormData((prevState) => ({
        ...prevState, [name]: value
      }))
  }

  return (
    <form
      // onSubmit={onSubmit} 
      id="form" 
      className='flex flex-col items-center bg-gray-100 h-5/6 w-5/6 rounded-md shadow-lg p-4'
    >
      <h3 className='text-2xl font-medium mt-2 mb-8'>
        Join out waitlist
      </h3>
      <label className={formStyles.label} htmlFor="fullName">Full Name</label>
      <input 
        type="text" 
        name="fullName"
        id="fullName"
        className={formStyles.input}
        placeholder="Name"
        value={formData.fullName}
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
        maxLength='9'
        minLength='9'
        onChange={onChange}
      />
      <div id="other-options" className='w-3/4 flex justify-around mt-6'>
        <span className=''>
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
        <span className='flex  w-1/2'>
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
      
    </form>
  )
}

export default WaitlistForm
