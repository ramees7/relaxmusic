import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div>
      <div className='' style={{width:"100%", height:"100%", backgroundColor:"#05504c", color:"#a5a5a5"}}>
            <Row className='p-5'>
                <Col md='4' className=' px-5 py-4'>
                    <h4 style={{color:"white"}}>Relax {' '}<img src="https://www.freeiconspng.com/thumbs/headphones-png/headphones-png-19.png" alt="" width={30} />
                    {' '}Music</h4>
                    <p style={{textAlign:'justify'}}>A harmonious and pleasant sound that you hear is called music. We can construct pieces by playing musical instruments. Nature has music in it, and music has therapeutic qualities and is known as a universal language. Along with music, singing is also a vital part of it.</p>
                    <p style={{color:"#fff"}} className='text-center'>Use Headphones For Better Experience </p>
                </Col>
                <Col md='4' sm={6}  xs={6} className='d-flex justify-content-center py-4' >
                    <div className='d-flex flex-column'>
                        <h4 style={{color:"#fff"}}>LINKS</h4>
                        <Link to={'/'} style={{textDecoration:"none", color:"#a5a5a5"}}>
                            Landing page
                        </Link>
                        <Link to={'/home'} style={{textDecoration:"none", color:"#a5a5a5"}}>
                            Home Page
                        </Link>
                        <Link to={'/features'} style={{textDecoration:"none", color:"#a5a5a5"}}>
                            Features 
                        </Link>
                        <Link to={'/history'} style={{textDecoration:"none", color:"#a5a5a5"}}>
                            Watch History 
                        </Link>
                        <Link to={'/favourites'} style={{textDecoration:"none", color:"#a5a5a5"}}>
                            Favourites
                        </Link>
                        <Link to={'/quotes'} style={{textDecoration:"none", color:"#a5a5a5"}}>
                            Quotes
                        </Link>
                    </div>
                </Col>
                <Col md='4' sm={6} xs={6} className='d-flex justify-content-center py-4'>
                    <div className='d-flex flex-column'>
                        <h4 style={{color:"#fff"}}>Guides</h4>
                        <Link to={'https://react.dev/'} style={{textDecoration:"none", color:"#a5a5a5"}}>React</Link>
                        <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:"none", color:"#a5a5a5"}}>React Bootstrap</Link>
                        <Link to={'https://fontawesome.com/'} style={{textDecoration:"none" ,color:"#a5a5a5"}}>Font Awsome</Link>
                        <Link to={'https://fonts.google.com/'} style={{textDecoration:"none" ,color:"#a5a5a5"}}>Google Font</Link>
                    </div>
                </Col>

            </Row>
            <p className='text-center py-4' style={{marginBottom:"0"}}>Copyright © 2023 Relax_Music. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer