import React from 'react'
import {Container ,Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
       <Navbar  style={{backgroundColor:"#05504c"}} >
        <Container>
          <Link to={'/'} style={{textDecoration:"none"}}>
            <Navbar.Brand className='d-flex'>
            <h3 style={{color:"white"}}>Relax {' '}<img src="https://www.freeiconspng.com/thumbs/headphones-png/headphones-png-19.png" alt="" width={40} />
              {' '}
               Music</h3>
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}



export default Header