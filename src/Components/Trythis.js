import React,{useState} from 'react'
import Latestarticle from './Latestarticle'
const TryThis = () => {
    const[Load ,setLoad]=useState(false)
    
    const LoadMore=()=>{
        setLoad(true)
    }
    const Loadless=()=>{
        setLoad(false)
    }
  return (
    <div>
    {
         Load ? 
         <div>
            <Latestarticle/>
           <button className='loading-buttons' onClick={Loadless}>Load-less <i class="fa-solid fa-rotate"></i></button>
        </div>
        
        :
          <div>
             <button className='loading-buttons' onClick={LoadMore}>For-More <i class="fa-solid fa-arrow-down"></i></button>
        </div>
     }
</div>
  )
}

export default TryThis