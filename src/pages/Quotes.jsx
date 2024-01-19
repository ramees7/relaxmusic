import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Quotes() {
  return (
     <div className=' d-flex text-center p-5 ' style={{backgroundColor:"#bcbcbc"}}>
          
          <Row >
               <Col xl='12' className='d-flex justify-content-between'>
                    <Link to={'/home'} style={{textDecoration:"none"}}><h6   >Back to All Vidoes</h6></Link>
                    <h1  >MUSIC QUOTES</h1>
                    <Link to={'/'} style={{textDecoration:"none"}}><h6 className=''  >Back to Home</h6></Link>
               </Col>
               <Col className='mx-3'></Col>
               <Col xl='5 ' className=' shadow rounded py-5 my-3 px-5'  style={{backgroundColor:"#c7c7c7"}}>
                    <h4><i className="fa-solid fa-quote-left" style={{color: "#000000"}}></i> One good thing about music, when it hits you, you feel no pain <i className="fa-solid fa-quote-right" style={{color: "#000000"}}></i></h4>
                    <p className='text-end' style={{marginBottom:" 0"}}> -Bob Marley</p>
               </Col>
               <Col xl='6' className=' shadow py-5 my-3 px-5 rounded'  style={{backgroundColor:"#c7c7c7"}}>
                    <h4><i className="fa-solid fa-quote-left" style={{color: "#000000"}}></i> Music expresses that which cannot be said and on which it is impossible to be silent <i className="fa-solid fa-quote-right" style={{color: "#000000"}}></i></h4>
                    <p className='text-end' style={{marginBottom:" 0"}}> -Victor Hugo </p>
               </Col>
               <Col className='mx-3'></Col>
               <Col className='mx-3'></Col>
               <Col xl='7 ' className='rounded shadow py-5 my-3 px-5' style={{backgroundColor:"#c7c7c7"}}>
                    <h4><i className="fa-solid fa-quote-left" style={{color: "#000000"}}></i>  Great minds discuss ideas; average minds discuss events; small minds discuss people  <i className="fa-solid fa-quote-right" style={{color: "#000000"}}></i></h4>
                    <p className='text-end' style={{marginBottom:" 0"}}> -Eleanor Roosevelt</p>
               </Col>
               <Col xl='4' className='rounded shadow py-5 my-3 px-5'  style={{backgroundColor:"#c7c7c7"}}>
                    <h4><i className="fa-solid fa-quote-left" style={{color: "#000000"}}></i> Some are born great, some achieve greatness, and some have greatness thrust upon them <i className="fa-solid fa-quote-right" style={{color: "#000000"}}></i></h4>
                    <p className='text-end' style={{marginBottom:" 0"}}> -William Shakespeare </p>
               </Col>
               <Col className='mx-3'></Col>
               <Col className='mx-3'></Col>
               <Col xl='5 ' className='rounded shadow py-5 my-3 px-5' style={{backgroundColor:"#c7c7c7"}}>
                    <h4><i className="fa-solid fa-quote-left" style={{color: "#000000"}}></i> Where words fail, music <br /> speaks  <i className="fa-solid fa-quote-right" style={{color: "#000000"}}></i></h4>
                    <p className='text-end' style={{marginBottom:" 0"}}> -Hans Christian Andersen</p>
               </Col>
               <Col xl='6' className='rounded shadow py-5 my-3 px-5'  style={{backgroundColor:"#c7c7c7"}}>
                    <h4><i className="fa-solid fa-quote-left" style={{color: "#000000"}}></i> Without music, life would be a mistake <i className="fa-solid fa-quote-right" style={{color: "#000000"}}></i></h4>
                    <p className='text-end' style={{marginBottom:" 0"}}> -Friedrich Nietzsche  </p>
               </Col>
               <Col className='mx-3'></Col>
               <Col className='mx-3'></Col>
               <Col xl='4 ' className='rounded shadow py-5 my-3 px-5' style={{backgroundColor:"#c7c7c7"}}>
                    <h4><i className="fa-solid fa-quote-left" style={{color: "#000000"}}></i>  Music is the strongest form of magic  <i className="fa-solid fa-quote-right" style={{color: "#000000"}}></i></h4>
                    <p className='text-end' style={{marginBottom:" 0"}}> -Marilyn Manson </p>
               </Col>
               <Col xl='7' className='rounded shadow py-5 my-3 px-5'  style={{backgroundColor:"#c7c7c7"}}>
                    <h4><i className="fa-solid fa-quote-left" style={{color: "#000000"}}></i> Music is the shorthand of emotion <i className="fa-solid fa-quote-right" style={{color: "#000000"}}></i></h4>
                    <p className='text-end' style={{marginBottom:" 0"}}>  -Leo Tolstoy  </p>
               </Col>
               <Col className='mx-3'></Col>
               <Col className='mx-3'></Col>
               <Col xl='7 ' className='rounded shadow py-5 my-3 px-5' style={{backgroundColor:"#c7c7c7"}}>
                    <h4><i className="fa-solid fa-quote-left" style={{color: "#000000"}}></i>  Music is very spiritual, it has the power to bring people together  <i className="fa-solid fa-quote-right" style={{color: "#000000"}}></i></h4>
                    <p className='text-end' style={{marginBottom:" 0"}}> -Edgar Winter</p>
               </Col>
               <Col xl='4' className='rounded shadow py-5 my-3 px-5'  style={{backgroundColor:"#c7c7c7"}}>
                    <h4><i className="fa-solid fa-quote-left" style={{color: "#000000"}}></i> Music is the best means we have of digesting <br />time <i className="fa-solid fa-quote-right" style={{color: "#000000"}}></i></h4>
                    <p className='text-end' style={{marginBottom:" 0"}}>  -W. H. Auden </p>
               </Col>
               <Col className='mx-3'></Col>
               <Col className='mx-3'></Col>
               <Col xl='6 ' className='rounded shadow py-5 my-3 px-5' style={{backgroundColor:"#c7c7c7"}}>
                    <h4><i className="fa-solid fa-quote-left" style={{color: "#000000"}}></i> One good thing about music, when it hits you, you feel no pain <i className="fa-solid fa-quote-right" style={{color: "#000000"}}></i></h4>
                    <p className='text-end' style={{marginBottom:" 0"}}> -Bob Marley</p>
               </Col>
               <Col xl='5' className='rounded shadow py-5 my-3 px-5'  style={{backgroundColor:"#c7c7c7"}}>
                    <h4><i className="fa-solid fa-quote-left" style={{color: "#000000"}}></i> Music expresses that which cannot be said and on which it is impossible to be silent <i className="fa-solid fa-quote-right" style={{color: "#000000"}}></i></h4>
                    <p className='text-end' style={{marginBottom:" 0"}}> -Victor Hugo </p>
               </Col>
               <Col className='mx-3'></Col>
          
          </Row>
     </div>
  )
}

export default Quotes