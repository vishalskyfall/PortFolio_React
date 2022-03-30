import React from 'react'
import logo from "../assets/logo.png";

function Footer() {
  return (
   
    
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#e9eaed] text-[#27292a]">
      <div>
        <img src={logo} alt="logo" style={{ width: "100px" }} />
      </div>

    </div>
  
  )
}

export default Footer