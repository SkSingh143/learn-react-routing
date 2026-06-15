import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId}=useParams()
    return (
        <div>
            <h1 className='bg-blue-400 text-red-500 text-3xl text-center'>User:{userId}</h1>
        </div>
    )
}

export default User
