import axios from 'axios';
import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'

const Lateststories = () => {
    const [Details,setDetails]=useState([]);
    useEffect(()=>{
        axios.get("https://backend-app-react.herokuapp.com/api/blog").then((res)=>{
            setDetails(res.data)
        })
    },[])
  return (
    <div>
        <div className='LatestArticles1'>
            <div className='latestarticlesleft'>
            <div className="latestheading">
        <div><h2>LatestArticles</h2></div>
        <div className='border-bottoms'></div></div>
          { 
                Details.filter(res=>res.id>31&&res.id<37).map((result,index)=>
              
                <div key={index} className='design'>
                  <div >
                 <Link to={`/Home/${result.id}`}><img className="images" src={result.image} alt="" /></Link>
                  </div>
                  <div className='content-data'>
                <div >
                 <h2>{result.name}</h2>
                </div>
                
                <div>
                <p>{ result.info}</p> 
                </div>
                <div>
                  <h2>{result.date}</h2>
                </div>
                
                </div>
                </div>
                    )
                 
                }
    </div>
            <div className='main-cont1'>
      <div className='top-heading'>
     <div><h2>Top-Posts</h2></div>
     <div className='toppost-border'></div>
     </div>
      {
    Details.filter((result=>result.id>23&&result.id<28)).map((technologies,index)=>
        <div className='design1'>
          <div >
          <Link to={`/Home/${technologies.id}`}><img className="images1" src={technologies.image} alt="" /></Link>
          </div>
          <div className='content-data'>
        <div >
         <h3>{technologies.name}</h3>
        </div>
        
        <div>
          <h5>{technologies.date}</h5>
        </div>
        </div>
        </div>
      
        
     )
      }
    </div>
        </div>
    </div>
    
  )
}

export default Lateststories