import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const goToHome = useNavigate()

    return (
        <div className='notFound'>
            <h1>404 ! Page not found </h1>
            <div><button onClick={()=>goToHome('/')}>Go to Home</button></div>
        </div>
    )
}

export default NotFound