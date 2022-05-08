import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Latestarticle = (props) => {
    const [Details,setDetails]=useState([]);
    useEffect(()=>{
        axios.get("https://backend-app-react.herokuapp.com/api/blog").then((res)=>{
            setDetails(res.data)
            
        })
    },[])
 return (
    //  2731
     <>
     <div className='latestheading'><h1>The-Latest</h1>
    <div className='border-bottoms'></div></div>
    <div className='latest-cont'>
         {
        Details.filter(result=>result.id>27&&result.id<31).map((article,index) => 
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

export default Latestarticle