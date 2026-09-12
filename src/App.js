import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { createContext, useState } from 'react';
import Listitem from './list.js';
import Favouritelist from './favouritlist.js';

const lists = createContext()

function App() {

   var list = [{
      id: 1,
    name: "Ashok"
      }, {
      id: 2,
    name: "Deepak"
      }, {
      id: 3,
    name: "Vamsi"
      },{
      id: 4,
    name: "Sekhar Babu"
      },{
      id: 5,
    name: "Gurunadha"
      },{
      id: 6,
    name: "Mukesh"
      },{
      id: 7,
    name: "Geetha"
      },{
      id: 8,
    name: "Charan"
      }]

      const [newlist,setnewlist]=useState([])

  return (<>

    <BrowserRouter>

      <nav className='bg-teal-300 text-black font-medium text-2xl flex justify-evenly p-4'>
        <Link to={"/"} className='underline' >List of Student</Link>
        <Link to={"/favouriteStudent"} className='underline'>Favourite Students</Link>
      </nav>
      <div className='bg-green-500 text-lg font-normal' >
        <lists.Provider value={list}>
          <Routes>
            <Route path='/' element={<Listitem newlist={newlist} setnewlist={setnewlist} />}></Route>
            <Route path='/favouriteStudent' element={<Favouritelist newlist={newlist} setnewlist={setnewlist}/>}></Route>
          </Routes>
        </lists.Provider>
      </div>


    </BrowserRouter>
  </>)
}

export default App;
export {lists}
