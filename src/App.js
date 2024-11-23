import React,{useState,useEffect} from 'react'
import Home from './Home'
import HashLoader from 'react-spinners/HashLoader'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const App = () => {
    const [Looding,setLooding]=useState(false)
    useEffect(()=>{
        setLooding(true);
        setTimeout(()=>setLooding(false),3000)
    },[]);
 return(

    <BrowserRouter>
    {Looding?
    <div className='preloder'>
    <HashLoader color="#f8981c" size={100} />
        </div>
    :
    <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
    </Routes>
    
    }
    </BrowserRouter>
    

    


)
}

export default App