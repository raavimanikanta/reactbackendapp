import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';

const SomeRelated = () => {
    const [Details,setDetails]=useState([]);
    useEffect(()=>{
        axios.get("https://backend-app-react.herokuapp.com/api/blog").then(response=>{
            setDetails(response.data)
        })
    },[])
  return (
    <div>
    <div className='borders'><h2>Some-Related-Stories</h2></div>
    <div className='TryThiscomponent'>
    <div className='Latest-related1'>
           
              {
                  Details.filter(data=>data.id>30&&data.id<34).map((latest)=>
                  <>
                  <div className='latest-related'>
                      <div >
                         <Link to={`/Technology/${latest.id}`}><img className='try-image' src={latest.image} alt="" /> </Link>
                          </div>
                         
                          <div>
                              <h2>{latest.name}</h2>
                          </div>
                          <div className='text-color'>
                              <p>{latest.info}</p>
                              <p>{latest.description}</p>
                          </div>
                          <div>
                              <h3>{latest.date}</h3>
                          </div>
                          </div>
                     </>
                  )
                  
              }
           </div>
           </div>
           </div>
           )
}

export default SomeRelated