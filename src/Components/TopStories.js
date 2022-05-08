import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TopStories = () => {
    const [Details,setDetails]=useState([]);
    useEffect(()=>{
        axios.get("https://backend-app-react.herokuapp.com/api/blog").then((res)=>{
            setDetails(res.data)
            
        })
    },[])
  return(
      <>
       <div className='latestheading'><h1>The-Latest-stories</h1>
    <div className='border-bottoms'></div></div>
    <div className='latest-cont'>
         {
        Details.filter(result=>result.id>36&&result.id<40).map((article,index) => 
        <div>
    <div key={index} className="latest-fitness" >
  
  <div>
    <Link to={`/Home/${article.id}`}><img  src={  article.image  } style={{height:"200px",width:"300px"}} alt="From The Article"/></Link></div>
  <div><h2>{article.name}</h2></div>
  <div>
  <div >{  article.info  }</div>
  </div>
  <div>
  <span ><h4>{ article.date }</h4></span>
  </div>
  </div> 
        </div>
            )
         }
     </div>
      </>
  )
}

export default TopStories