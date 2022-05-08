import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SomeRelated from "./SomeRelated";
import Trythis from "./Trythis"
const ViewData = () => {

  const [tolly, setTolly] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-app-react.herokuapp.com/api/blog")
      .then((res) => {
        setTolly(res.data);
      });
  }, []);
    const {id} =useParams();
    
    const[dataa,setDataa] =useState({ img:"",det:"",date:"",description:"",category:""})


    useEffect(() => {
        tolly.forEach((view)=>{
            if(view.id===id){
            setDataa({
                    img:view.image,
                    det:view.info,
                    date:view.date,
                    description:view.description,
                    category:view.name,
                });
            }
        });
    },)
    
    return (
        <div>
              <div className="Dynamic-component">
    <div>
        <h1>{dataa.category}</h1>
    </div>
    <hr />
    <div>
      <img className='data-image' src={dataa.img} alt="" />
    </div>
    <div>
      <p>{dataa.det}</p>
      <p>{dataa.description}</p>
    </div>
    <div>
      <h3>{dataa.date}</h3>
    </div>
    </div>
    <div>
    <SomeRelated/> 
     <Trythis/>
    </div>
        </div>
    )
}
export default ViewData