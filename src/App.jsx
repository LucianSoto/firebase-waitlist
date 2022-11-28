import React, {useState, useEffect, useRef} from 'react'
import List from './components/List'
import Modal from './components/Modal'
import WaitlistForm from './components/WaitlistForm'
import { BrowserRouter as Router, Routes, Route, Link, Navigate,  } from 'react-router-dom'
import Edit from './components/Edit'

function App() {
  const mounted = useRef(false)
  const [form, setForm] = useState(true)

  useEffect(() => {
    if(mounted.current === false) {
      mounted.current = true
    }
    
  }, [])

  const closeForm = () => {
    // e.preventDefault()
    console.log('closing')
    setForm(prevState => !prevState)
  }

  return (
// /////// Retrieve wiatlist by timestamp!!!!!!!!!???
    <Router>
      <div id="app" className="bg-purple-100 flex flex-col items-center justify-center">
        <header className=" mb-4 rounded-t-md">
          <h1 className='text-4xl font-bold mt-4'>Firebase Waitlist</h1>
        </header>
        <Routes>
          <Route exact path='/firebase-waitlist' element={<List/>} end/>
          <Route path='/waitlist-form' element={<WaitlistForm closeForm={closeForm}/>} />
          <Route path="/edit/:id" element={<Edit closeForm={closeForm}/> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
