import React, {useState, useEffect, useRef} from 'react'
import List from './components/List'
import Modal from './components/Modal'
import WaitlistForm from './components/WaitlistForm'
import { BrowserRouter as Router, Routes, Route, Link, Navigate, } from 'react-router-dom'

function App() {
  const mounted = useRef(false)

  const [form, setForm] = useState(true)

  useEffect(() => {
    if(mounted.current === false) {
      mounted.current = true
    }
    
  }, [form])

  const closeForm = (e) => {
    e.preventDefault()
    setForm(prevState => !prevState)
  }

  return (
// /////// Retrieve wiatlist by timestamp!!!!!!!!!???
    <Router>
      <div id="app" className="bg-purple-100 flex flex-col items-center justify-center">
        <header className=" mb-4 rounded-t-md">
          <h1 className='text-4xl font-bold mt-4'>Firebase Waitlist</h1>
        </header>
        <Link 
          id="button" 
          to={form ? '/waitlist-form' : '/firebase-waitlist'}
          // navigate to form
          onClick={()=> setForm(prevState => !prevState)}
          className={`py-2 px-8 mt-2 mb-8 ${form ? "bg-green-400  hover:bg-green-500" : "bg-red-400 hover:bg-red-500" } shadow-md hover:shadow-lg rounded-full text-lg uppercase tracking-widest text-gray-100 font-bold`}>{form? 'Join' : 'Back'}
        </Link>
        <Routes>
          <Route exact path='/firebase-waitlist' element={<List/>} end/>
          <Route path='/waitlist-form' element={<WaitlistForm closeForm={closeForm}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
