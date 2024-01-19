import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Features() {
  return (
    <div className='p-5' style={{ backgroundColor:"#bcbcbc"}}>
      <div xl='12' className='d-flex justify-content-between'>
          <Link to={'/'} style={{ textDecoration: "none" }}><h6   >Home</h6></Link>
          <h1  >FEATURES</h1>
          <Link to={'/home'} style={{ textDecoration: "none" }}><h6 className=''  >Back to All Vidoes</h6></Link>
        </div>
        <div className='d-flex justify-content-around py-5' style={{flexWrap:"wrap"}}>
          <Card style={{ width: '18rem', backgroundColor:"#c7c7c7" }} className='mb-5 rounded shadow'>
            <Card.Img variant="top" className='rounded' style={{backgroundColor:"#fff"}}  height={"240px"} src="https://www.zellusmarketing.com/wp-content/uploads/2021/03/icon-4.5s-317px-1.gif" />
            <Card.Body>
              <Card.Title className='text-center py-2' style={{color:"#000"}}>Managing Videos</Card.Title>
              <Card.Text style={{textAlign:"justify"}}>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', backgroundColor:"#c7c7c7" }}  className='mb-5 rounded shadow'>
            <Card.Img variant="top"  className='rounded'  height={"240px"}  src="https://cdn.dribbble.com/users/187288/screenshots/2558637/share-6_3.gif" />
            <Card.Body>
              <Card.Title className='text-center py-2' style={{color:"#000"}}>Uploading Videos</Card.Title>
              <Card.Text style={{textAlign:"justify"}}>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', backgroundColor:"#c7c7c7" }}  className='mb-5 rounded shadow'>
            <Card.Img variant="top" className='rounded'   height={"240px"} src="https://imgvisuals.com/cdn/shop/products/animated-update-time-linear-ui-icon-623356.gif?v=1697071161" />
            <Card.Body>
              <Card.Title className='text-center py-2' style={{color:"#000"}}>Watch History</Card.Title>
              <Card.Text style={{textAlign:"justify"}}>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', backgroundColor:"#c7c7c7"}}  className='mb-5 rounded shadow'>
            <Card.Img variant="top" className='rounded'  height={"240px"} src="https://cdn.dribbble.com/users/527451/screenshots/3124186/skillsoft_icon_quote.gif" />
            <Card.Body>
              <Card.Title className='text-center py-2' style={{color:"#000"}}>Music Quotes</Card.Title>
              <Card.Text style={{textAlign:"justify"}}>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='p-5'>
            <div className='p-5  rounded shadow '  style={{ backgroundColor:"#c7c7c7"}}>
                <Row className='pt-3'>
                    <Col className='px-5' md='5'>
                    <h1 className='text-center pb-4'>Simple,Fast and Powerfull</h1>
                    <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cupiditate rerum atque magnam, aliquam, dignissimos quis doloribus corrupti quam doloremque corporis esse ut ratione quia adipisci amet nesciunt autem tempora!Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cupiditate rerum atque magnam, aliquam, dignissimos quis doloribus corrupti quam doloremque corporis esse ut ratione quia adipisci amet nesciunt autem tempora!</p>
                    </Col>
                    <Col className='px-5' md='7'>
                    <iframe width="650" height="350" src="https://www.youtube.com/embed/pd_6WN9GVtQ?si=s3H37qK3ViUFLoax" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
  )
}

export default Features