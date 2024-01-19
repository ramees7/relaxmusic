import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { deleteFavourite } from '../services/allApis';
import { toast } from 'react-toastify';

function Favcards({ fav, delResUpdate ,getFavourites}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const removeFavourite = async (id) => {
        let res = await deleteFavourite(id)
        // console.log(res)
        if (res.status >= 200 || res.status < 300) {
            //   delResUpdate()
            getFavourites()
            toast.success("Video deletion success")
        }
        else {
            toast.error("Video Deletion Failed")
        }
    }


    return (
        <div>
            <Card style={{ width: '100%' }} className='my-4' >
                <Card.Img variant="top" style={{ height: '200px' }} src={fav?.thumbnail} onClick={handleShow} />
                <Card.Body className='d-flex justify-content-center align-items-center'>

                    <h6 className='text-center mb-0' style={{ color: "#000", width: "90%" }}>{fav?.caption}</h6>
                    <span style={{ float: "right" }} onClick={() => removeFavourite(fav?.id)}><i className="fa-solid fa-trash-can ms-3" style={{ fontSize: "20px", color: "#000" }}></i></span>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{fav?.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="400" src={`${fav?.url}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default Favcards