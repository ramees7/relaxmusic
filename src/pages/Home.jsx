import React, { useEffect, useState } from 'react';
import Add from '../components/Add';
import Catagory from '../components/Catagory';
import View from '../components/View';
import { Col, Row } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import Favourite from './Favourite';

function Home() {
  const [resState, setResState] = useState(false)
  const changeResState = () => {
    setResState(true)
  }

// useEffect((e)=>{
// e.preventDefault()
// })

  return (
    <div style={{backgroundColor:"#bcbcbc"}}>

      <Row>
        <Col xl='12' className='d-flex justify-content-between pt-5 px-5'>
          <Link to={'/'} style={{ textDecoration: "none" }} className='ps-3'><h6   >Home Page</h6></Link>
          <h1  >ALL VIDEOS</h1>
          <div>
          <Link to={'/history'} style={{ textDecoration: "none" }}><h6 className=''  >Watch History</h6></Link>
          <Link to={'/favourites'} style={{ textDecoration: "none" }}><h6 className=''  >Favourites</h6></Link>
          </div>
        </Col>
        <Col md='9'>
          <Add changeResState={changeResState} />
          <View resState={resState} setResState={setResState} />
        </Col>
        <Col md='3'>
          <Catagory />
        </Col>

      </Row>
      <ToastContainer />
    </div>
  )
}

export default Home