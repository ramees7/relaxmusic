import React ,{useState} from 'react'
import { Modal, Form ,Button ,FloatingLabel } from 'react-bootstrap';
import { addVideos } from '../services/allApis';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';



function Add({changeResState}) {
    const [show, setShow] = useState(false);
    const [video,setVideo]= useState({
      id:"",caption:"",thumbnail:"",url:""
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleVideoDetails=(e)=>{
      const {name,value}=e.target
      // console.log(e.target)
      setVideo({...video,[name]:value})
    }

    const handleVideoUrl=(e)=>{
      const {name,value}=e.target
      if(value.includes("v=")){
        let index=value.indexOf("v=")
        // console.log(index)
        let url=value.substring(index+2,index+13)
        // console.log(url)
        let videoUrl=`https://www.youtube.com/embed/${url}`
        // console.log(videoUrl)
        setVideo({...video,[name]:videoUrl})
      }
    }

    const uploadVideo=async()=>{
      const{id,caption,thumbnail,url}=video
      if(!id || !caption || !thumbnail || !url){
        toast.warning("fill the video details")
      }
      else{
        let response=await addVideos(video)
        console.log(response)
      if(response.status>=200 || response.status<300){
        setShow(false)
        changeResState()
        toast.success("New Video Uplaoded!!")
      }else{
        toast.error("Video Uplaod Failed")
      }
    }
  }
    
    console.log(video)
    return (
      <>
        {/* <div className='btn ' onClick={handleShow}> */}
          <span className='btn ' onClick={handleShow} style={{position:"relative", top:"70px", left:"73px"}}><i class="fa-solid fa-circle-plus " style={{color:"#000", fontSize:"30px"}}></i></span>
          {/* <i class="fa-solid fa-trash fa-xl" style={{color: "#000000" ,position:"relative", top:"120px", left:"72px"}}></i> */}
        {/* </div> */}
  
  
        <Modal show={show}  onHide={handleClose} backdrop="static"  keyboard={false} >
          <Modal.Header closeButton>
            <Modal.Title className='text-center w-100'>Upload Video Details</Modal.Title>
          </Modal.Header>
          <Modal.Body >
              <FloatingLabel controlId="floatingID" label="Video ID" className="mb-3 rounded" >
                <Form.Control type="text" placeholder="Video ID" className='rounded' name='id' onChange={(e)=>handleVideoDetails(e)}/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingCaption" label="Caption" className="mb-3 rounded">
                <Form.Control type="text" placeholder="Video Caption"  className='rounded' name='caption' onChange={(e)=>handleVideoDetails(e)}/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingImageUrl" label="Video Image URL" className="mb-3 rounded" >
                <Form.Control type="text" placeholder="Video Image URL" className='rounded' name='thumbnail' onChange={(e)=>handleVideoDetails(e)}/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingVideoUrl" label="Video URL" className='rounded'>
                <Form.Control type="text" placeholder="Youtube Video URL" className='rounded' name='url'  onChange={(e)=>handleVideoUrl(e)}/>
              </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={uploadVideo} className='rounded'>Update </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default Add