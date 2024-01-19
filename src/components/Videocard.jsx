import React, { useEffect, useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { addFavourite, addHistory, deleteFavourite, deleteVideo } from '../services/allApis';
import { v4 as uuidv4 } from 'uuid';
import './Videocard.css'
import { Link } from 'react-router-dom';

function Videocard({ video, delResUpdate, isCatagory, isFavourite }) {
  const [show, setShow] = useState(false)


  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handleShow = async () => {
    setShow(true);
    let date = new Date()
    // console.log(date)
    let id = uuidv4()
    const { thumbnail, caption, url } = video
    console.log(id, thumbnail, caption, url, date)
    let body = { id, thumbnail, caption, url, date }
    const res = await addHistory(body)
    console.log("rgfdgfdgfdgdfgfgfdgfdh",
    +res)
  }

  const removeVideo = async (id) => {
    // console.log(id)
    let res = await deleteVideo(id)
    let ress = await deleteFavourite(id)
    // console.log(res)
    if (res.status && ress.status >= 200 || res.status && ress.status < 300) {
      delResUpdate()
      toast.success("Video deletion success")
    }
    else {
      toast.error("Video Deletion Failed")
    }
  }

  const onDrag = (e, id) => {
    console.log("Target Video Id", id)
    e.dataTransfer.setData("videoid", id)
  }


  const [isAddedFav, setIsAddedFav] = useState([false])

  const onClickFavourite = async (id) => {
    console.log("dfsf", id)
    // const fav=await (id)
    // console.log(fav)
    let fav = await (video)
    console.log("dgdf", fav)
    let ress = await addFavourite(fav)
    console.log("sfsdd", ress)
    if (ress.status >= 200 || ress.status < 300) {
      // delResUpdate()
      setIsAddedFav(false)
      toast.success(<Link to={'/favourites'} style={{ textDecoration: "none" }}>Added to Favourite<button style={{ border:"1px solid green", color: "#000" }} className='p-2 ms-2 rounded'>View</button></Link>)
    }
    else {
      toast.error("Already Added")
      setIsAddedFav(false)

    }

  }
  

  const onclickRemoveFavourite = async (id) => {
    let res = await deleteFavourite(id)
    // console.log(res)
    if (res.status >= 200 || res.status < 300) {
      setIsAddedFav(true)
      toast.success("Deleted Favourite")
    }
    else {
      setIsAddedFav(false)
      toast.error("failed")
    }
  }


  return (
    <div >
      <Card style={{ width: '100%' }} className='my-4' >
        <Card.Img variant="top" style={{ height: '200px' }} src={video?.thumbnail} draggable onDragStart={(e) => onDrag(e, video?.id)} onClick={handleShow} />


        <Card.Body className='d-flex justify-content-center align-items-center w-100 ' >
          <h6 className='text-center mb-0' style={{ color: "#000", width: "90%" }}>{video?.caption}</h6>
          {
            isCatagory ? '' : <span style={{ float: "right" }} onClick={() => removeVideo(video?.id)}><i className="fa-solid fa-trash-can ms-3" style={{ fontSize: "20px", color: "#000" }}></i></span>

          }

        </Card.Body>
        {
          isAddedFav ?
            <i className="fa-regular fa-heart fav " style={{ fontSize: "25px", position: "absolute", top: "10px", right: "10px" }} onClick={() => onClickFavourite(video?.id)}></i>
            :
            <i className="fa-solid fa-heart fav " style={{ fontSize: "25px", position: "absolute", top: "10px", right: "10px", color: "#ff0000" }} onClick={() => onclickRemoveFavourite(video?.id)}></i>
        }

      </Card>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="400" src={`${video?.url}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Videocard



