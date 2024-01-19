import React from 'react'
import { useNavigate } from 'react-router-dom' 

// import {Card } from 'react-bootstrap'

function Landing() {
  const navigateByUrl1=useNavigate()
  const navigateByUrl2=useNavigate()

  const clickNavigate1=()=>{
    navigateByUrl1('/home')
  }
  const clickNavigate2=()=>{
    navigateByUrl2('/features')
  }
  return (
    <div style={{ backgroundColor:"#bcbcbc", overflowY:"hidden"}} > 
      <div className='d-flex justify-content-center align-items-center ' style={{height:"500px"}}>
        <div className='d-flex flex-column text-center' style={{position:"absolute"}}>
          <h1 className='' style={{fontSize:"55px", fontFamily:"Bungee Shade, sans-serif", overflowY:"hidden"}}>Tune In Together</h1>
          <h5 className=''><i className="fa-solid fa-quote-left" style={{color: "#000000"}}></i> Music is the strongest form of magic  <i className="fa-solid fa-quote-right" style={{color: "#000000"}}></i></h5>
          <h6 className='text-end pe-5 me-4' style={{fontSize:"9px", }}>-<q>Marilyn Manson</q></h6>
          <div className='d-flex justify-content-center'>
              <button className='mx-3 ' style={{width:"150px",height:"40px", backgroundColor:"#05504c", color:"#fff", border:"none", borderRadius:"5px", marginTop:"40px" }}><span className='p-3 ' onClick={clickNavigate1}> Get Started</span></button> 
              <button  className='mx-3 ' style={{width:"150px",height:"40px", backgroundColor:"#05504c", color:"#fff", border:"none", borderRadius:"5px", marginTop:"40px"}}><span className='p-3 ' onClick={clickNavigate2}> Features</span></button> 
          </div>
        </div>
      </div>

    </div>
  )
}

export default Landing