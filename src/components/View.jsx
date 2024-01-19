import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import {getVideos} from '../services/allApis'
import { Col, Row } from 'react-bootstrap'

function View({resState,setResState}) {

  const [allVideos,setAllVideos]=useState([])
  const [delResponse,setDelResponse]=useState(false)
  const delResUpdate=()=>{
    setDelResponse(true)
  }

  const getVideo=async()=>{
    let res=await getVideos()
    setAllVideos(res.data)
    console.log(res.data)
    setResState(false)
    setDelResponse(false)
  }

  useEffect(()=>{
    getVideo()
  },[resState,delResponse])

  return (
    <div  className= 'p-5 border shadow rounded mx-5 mb-5' style={{backgroundColor:"#c7c7c7"}}>
      <Row>
        {
          allVideos.map(item=>(
            <Col sm={12} lg={4} md='6'>
              <Videocard video={item} delResUpdate={delResUpdate}/>
            </Col>
          ))
        }
      </Row>
      {/* <Videocard/> */}
    </div>
  )
}

export default View