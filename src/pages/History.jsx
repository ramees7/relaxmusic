import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getHistory } from '../services/allApis'
import { ToastContainer, toast } from 'react-toastify'
import { Col, Modal, Row } from 'react-bootstrap'

function History() {

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const [history, setHistory] = useState([])

  const handleHistoryList = async () => {
    const res = await getHistory()
    setHistory(res.data)
    console.log(res.data)
  }

  const handlehistoryDelete = async (id) => {
    const res = await deleteHistory(id)
    console.log(res)
    if (res.status >= 200 || res.status < 300) {
      toast.success("History Removed")
      handleHistoryList()
    }
    else {
      toast.error("Failed")
    }
  }

  useEffect(() => {
    handleHistoryList()
  }, [])
  return (
    <div style={{ overflowX: "scroll", backgroundColor: "#bcbcbc" }} className=' p-5'>
      <Row>
        <Col xl='12' className='d-flex justify-content-between'>
          <Link to={'/home'} style={{ textDecoration: "none" }}><h6   >Back to All Vidoes</h6></Link>
          <h1  >WATCH_HISTORY</h1>
          <Link to={'/quotes'} style={{ textDecoration: "none" }}><h6 className=''  >Quotes</h6></Link>
        </Col>

      </Row>
      <table className='table  rounded m-5 ' style={{ width: "94%", backgroundColor: "#c7c7c7" }}>
        <tr className=' ' style={{ backgroundColor: "#05504a", color: "#fff" }}>
          <th className='p-3'>ID</th>
          <th style={{}}>Thumbnail</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Date</th>
          <th></th>
        </tr>
        {
          history.map((item, index) => (
            <tr >
              <td className='p-3'>{index + 1}</td>
              <td><img src={item?.thumbnail} onClick={handleShow} width={200} height={100} alt="" style={{ backgroundColor: "#c7c7c7" }} /></td>
              <td >{item?.caption}</td>
              <td onClick={handleShow} style={{ textDecoration: "none" }}>{item?.url}</td>
              <td >{item?.date}</td>
              <td ><span className='btn mt-1' style={{ backgroundColor: "#c7c7c7" }}><i className="fa-solid fa-trash  " onClick={() => handlehistoryDelete(item?.id)} style={{ color: "#a80505", fontSize: "20px" }}></i></span></td>
            </tr>

          ))

        }

      </table>
      {
        history.map((item) => (
          <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
              <Modal.Title>{item?.caption}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <iframe width="100%" height="400" src={`${item?.url}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Modal.Body>
          </Modal>
        ))
      }
      <ToastContainer />
    </div>
  )
}

export default History