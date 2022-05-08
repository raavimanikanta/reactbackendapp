import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

const Toparticle = () => {
    const [Details,setDetails]=useState([])
    useEffect(()=>{
        axios.get("https://backend-app-react.herokuapp.com/api/blog").then(response=>{
            setDetails(response.data)
        })
    })
  return (
    <>
    <div className="atricle-components" >
       <div className='article-leftcomponent' >
     {   // eslint-disable-next-line
      Details.filter((res)=>res.id==="6").map((article, index) => {
     
         return(
            
      <Link to={`/Home/${article.id}`} className='Home-css'>
      <div key={index} className="back-image"  style={   {backgroundImage: `url(${article.image})`,  backgroundPosition: 'center',  backgroundSize: 'cover',   backgroundRepeat: 'no-repeat',
      width:"800px",height:"500px" }  }><div className=""><span><h4>{article.name}</h4></span><span>{article.date}</span>
     </div>
     </div>
     </Link>
    )
     }
     
      )
  }
  </div>
 
     <div >
       <div >
        <div>
            {// eslint-disable-next-line
      Details.filter((res)=>res.id==="19").map((article, index) => {
    
           return(
   <Link to={`/Home/${article.id}`} className='Home-css'> 
   <div key={index} className="back-image2"  style={   {backgroundImage:`url(${article.image})`,  backgroundPosition: 'center',  backgroundSize: 'cover',   backgroundRepeat: 'no-repeat',
        width:"300px",height:"180px" }  }>
       
        <div className="">
      
        <span>{article.date}</span>
           </div>
          </div>
          </Link>
          )
       }
       
        )
              
            }
        </div>
        <div>
            {
                // eslint-disable-next-line
        Details.filter((res)=>res.id==="33").map((article, index) => {
    
           return (
            <Link to={`/Home/${article.id}`} className='Home-css'> 
        <div key={index}  className="back-image3" style={{backgroundImage: `url(${article.image})`,  backgroundPosition: 'center',  backgroundSize: 'cover',   backgroundRepeat: 'no-repeat',
        width:"400px",height:"280px" }  }>
       
        <div className="">
      
        <span>{article.date}</span>
           </div>
          </div>
          </Link>)
})
            
    
        
}
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Toparticle