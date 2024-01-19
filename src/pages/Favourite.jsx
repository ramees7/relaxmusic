import React, { useEffect, useState } from 'react'
import { deleteFavourite, getFavourite } from '../services/allApis'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import Videocard from '../components/Videocard'
import { ToastContainer, toast } from 'react-toastify';
import Favcards from '../components/Favcards';
import { Link } from 'react-router-dom';

function Favourite() {




  const [favourite, setFavourite] = useState([])


  const getFavourites = async () => {
    let res = await getFavourite()
    setFavourite(res.data)
    console.log(res.data)
    // setResState(false)
    // setDelResponse(false)
  }



  useEffect(() => {
    getFavourites()

  }, [])

  return (
    <div className='p-5 'style={{backgroundColor:"#bcbcbc"}}>
      <div xl='12' className='d-flex justify-content-between'>
          <Link to={'/home'} style={{ textDecoration: "none" }}><h6   >Back to All Vidoes</h6></Link>
          <h1  >FAVOURITES</h1>
          <Link to={'/history'} style={{ textDecoration: "none" }}><h6 className=''  >Watch-History</h6></Link>
        </div>
        <Row className='p-4 border my-3 rounded'  style={{backgroundColor:"#c7c7c7"}}>
        
          {
            favourite.map(item => (
              <Col md={2}>
                <Favcards fav={item} getFavourites={getFavourites}/>
              </Col>
            ))

          }
        </Row>

   <ToastContainer/>
    </div>
  )
}

export default Favourite