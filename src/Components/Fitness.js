import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Nature = () => {
  const [Details, setDetails] = useState([]);
useEffect(() => {
    axios
      .get("https://backend-app-react.herokuapp.com/api/blog")
      .then((res) => {
        setDetails(res.data);
      });
  }, []);
  
    return (
      <div className="category-cont">
      <div className='main-cont'>
      <div className='top-heading'>
     <div><h2>Fitness</h2></div>
     <div className='toppost-border'></div>
     </div>
          {
              Details.filter((result=>result.id>10&&result.id<16)).map((technologies,index)=>
              <div className='design'>
                  <div>
              <Link to={`/Fitness/${technologies.id}`}><img className="images" src={technologies.image} alt="" /></Link>
                  </div>
                  <div className='content-data'>
                      <div>
                      <h2>{technologies.name}</h2>
                  </div>
                  <div>
                      <p>{technologies.info}</p>
                  </div>
                  <div>
                      <h2>{technologies.date}</h2>
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
    Details.filter((result=>result.id>35&&result.id<40)).map((technologies,index)=>
        <div className='design1'>
          <div >
          <Link to={`/Fitness/${technologies.id}`}><img className="images1" src={technologies.image} alt="" /></Link>
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
    );
  };
  
  export default Nature;