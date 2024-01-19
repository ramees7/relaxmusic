
import { BASE_URL } from "./base_url"
import { commonRequest } from "./commonRequest"


//function upload videos


export const addVideos=async (body)=>{
    return await commonRequest("POST",`${BASE_URL}/Videos`,body)
}

export const getVideos=async ()=>{
    return await commonRequest("GET",`${BASE_URL}/videos`,'')
}
export const deleteVideo=async(id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/videos/${id}`,'')
}

export const addCatagoryVideos = async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/catagory`,body)
}

export const getCatagory =async()=>{
    return await commonRequest("GET",`${BASE_URL}/catagory`,'')
}

export const getSpecificVideos =async(id)=>{
    return await commonRequest("GET",`${BASE_URL}/videos/${id}`,'')
}

export const updateCatagory=async(id,body)=>{
    return await commonRequest("PUT",`${BASE_URL}/catagory/${id}`,body)
}

export const deleteCatagory=async(id)=>{
    return await commonRequest('DELETE',`${BASE_URL}/catagory/${id}`)
}

// to get watch history

export const getHistory =async()=>{
    return await commonRequest("GET",`${BASE_URL}/watch-history `,'')
}

//to add history

export const addHistory=async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/watch-history`,body)
}

export const deleteHistory=async(id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/watch-history/${id}`,'')
}

export const addFavourite=async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/favourite`,body)
}

export const getFavourite =async()=>{
    return await commonRequest("GET",`${BASE_URL}/favourite `,'')
}

export const deleteFavourite=async(id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/favourite/${id}`,'')
}