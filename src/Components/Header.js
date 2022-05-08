import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className='Title'>
        <div className='sub-title1'>The</div>
        <div  className='sub-title2'>Categories</div>
      </div>
        <div className='header'>
            <ul type="none">
                <Link to="/home" className='Home-css'><li>Home</li></Link>
                <Link to="/tollywood" className='Home-css' ><li>Tollywood</li></Link>
                <Link to="/Fitness" className='Home-css'><li>Fitness</li></Link>
                <Link to="/Technology" className='Home-css'><li>Technology</li></Link>
                <Link to="/Transport" className='Home-css'><li>Transport</li></Link>
                <Link to="/Food" className='Home-css'><li>Food</li></Link>
            </ul>
        </div>
     
    </div>
  );
};

export default Header;