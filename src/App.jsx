import React, {useState, useEffect} from 'react'
import List from './components/List'

function App() {
  return (
    <div id="app" className="bg-purple-100 flex flex-col items-center justify-center">
      <header className=" mb-4 rounded-t-md">
        <h1 className='text-4xl font-bold mt-4'>Firebase Waitlist</h1>
      </header>
      {/* Join Button */}
      {/* need to add more componenets 
          such as ppl waiting time estimate etc in order to make use of redux  
      */}
      <List/>
    </div>
  );
}

export default App;
