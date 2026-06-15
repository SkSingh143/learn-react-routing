import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data,setdata]=useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary').then((response)=>(response.json()))
    //     .then((resp)=>setdata(resp))
    // }) tab humlog loader ka use nhi karpayenge isse karenge toh 
    const data=useLoaderData()
    
    return (
        
        <div className='bg-green-400 flex justify-around items-center'>
            <span><b className='text-3xl'>Name:{data.name}</b></span>
            <span className='text-center text-3xl'><b>Followers:{data.followers}</b></span>
            <span><img src={data.avatar_url} alt="Image of Hitesh Sir" width={300} /></span>

        </div>


        
    )
}

export default Github
export const loaderdata = async ()=>{
    const response=await fetch('https://api.github.com/users/hiteshchoudhary')
    const respo=await response.json()
    return respo;
}
