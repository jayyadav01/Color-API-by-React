import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/App.css";
import { PhotoFrame } from "./PhotoFrame";
import { Loader } from './Loader'

const App = () => {
    const [number,setnumber] = useState([]);
    const [data,setdata] = useState([]);
    const [loader,setloader] = useState(false)

    useEffect(() => {
        if(number.length>0)
        {
          setloader(true);
          axios.get(`https://jsonplaceholder.typicode.com/photos/${number}`).then((resolve) => {
            console.log(resolve.data)
            setdata(resolve.data)
            setloader(false)
          })
        }
        else
        {
          setloader(false);
        }
    } , [number])
    
    console.log(number);
    
    return (
    <>
            Id number <input type='number' onChange={(e) => setnumber(e.target.value)}/>    

            { 
                (loader) ?  <Loader/> : (number!='') ? <PhotoFrame pic={data.url} par={data.title} /> : '' 
            }
            
    </>
  )
};

export default App;
