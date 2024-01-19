import React, { useEffect, useState } from 'react'
import { Button, Collapse, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { addCatagoryVideos, deleteCatagory, getCatagory, getSpecificVideos, updateCatagory } from '../services/allApis';
import Videocard from './Videocard';

function Catagory() {

  const [show, setShow] = useState(false);

  const [open, setOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [catagories, setCatagories] = useState([])
  const [catagoryDetails, setCatagoryDetails] = useState({
    id: '', catagoryName: '', allVideos: []
  })

  const handleCatagoryList = async () => {
    const res = await getCatagory()
    console.log(res.data)
    setCatagories(res.data)
  }

  const handleCatagory = (e) => {
    const { name, value } = e.target
    // console.log(e.target)
    setCatagoryDetails({ ...catagoryDetails, [name]: value })

  }
  console.log(catagoryDetails)

  const handleRequest = async () => {
    const { id, catagoryName } = catagoryDetails
    if (!id || !catagoryName) {
      alert("Please Fill The Details")
    }
    else {
      let res = await addCatagoryVideos(catagoryDetails)
      console.log(res)
      if (res.staus >= 200 || res.status < 300) {
        setShow(false)
        handleCatagoryList()
        toast.success("Catagory Uploaded")
      }
      else {
        toast.error("Catagory Adding Failed")
      }
    }
  }


  useEffect(() => {
    handleCatagoryList()
  }, [])

  const dragOver = (e) => {
    e.preventDefault()
    console.log("Dragging Over Catagory Board")
  }

  const onDropHandle = async (e, id) => {
    console.log("Drop Target Catagory ID", id)
    let videoid = e.dataTransfer.getData("videoid")
    console.log("Video Id", videoid)
    const video = await getSpecificVideos(videoid)
    console.log(video.data)

    let selectedCatagory = catagories?.find(item => item?.id === id)
    console.log(selectedCatagory)
    selectedCatagory.allVideos.push(video.data)
    console.log(selectedCatagory)
    const res = await updateCatagory(id, selectedCatagory)
    console.log(res)

    if (res.status >= 200 || res.status < 300) {
      toast.success("Catagory Updated")
      handleCatagoryList()
    }
    else {
      toast.error("Updation Failed")
    }
  }

  const handleCatagoryDelete = async (id) => {
    const res = await deleteCatagory(id)
    console.log(res)
    if (res.status >= 200 || res.status < 300) {
      toast.success("Catagory Removed")
      handleCatagoryList()
    }
    else {
      toast.error("Failed")
    }
  }



  return (
    <div className='m-5 '>
      <button className='btn  p-3 mb-3 rounded ' onClick={handleShow} style={{ backgroundColor: "#05504c", color: "#fff", width: "100%" }}>   <img src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/add-category-icon.png" alt="catagory" width={25} className='me-3'/>Add Catagory</button>

      {
        catagories.map(item => (
          <div className='  p-3 border shadow rounded btn w-100 mb-3' style={{ backgroundColor: "#05504c"}} droppable onDragOver={(e) => dragOver(e)} onDrop={(e) => onDropHandle(e, item?.id)} >
            <div onClick={() => setOpen(!open)} aria-controls="catagory-collapse " aria-expanded={open }>
              <span style={{ position: "relative", left: "10%", color: "#fff" }}>
                {item?.catagoryName}

              </span>
              <span className='btn' style={{ float: "right", position: "relative", top: "-12px" }} onClick={() => handleCatagoryDelete(item?.id)}><i className="fa-solid fa-trash " style={{ color: "#a80505", fontSize: "20px" }} ></i></span>
            </div>

            <Collapse in={open}>
              <div id="catagory-collapse">
                {
                  item?.allVideos?.map(video => (
                    <Videocard video={video} isCatagory={true} />
                  ))
                }
              </div>
            </Collapse>



          </div>
        ))
      }

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingID" label="Id" className="mb-3" >
            <Form.Control type="text" placeholder="name@example.com" name='id' onChange={(e) => handleCatagory(e)} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingCatagory" label="Catagory Name">
            <Form.Control type="text" placeholder="Password" name='catagoryName' onChange={(e) => handleCatagory(e)} />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleRequest}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Catagory



