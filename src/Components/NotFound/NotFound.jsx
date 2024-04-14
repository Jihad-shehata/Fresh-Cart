import React from 'react'
import notFoundImg from '../../Assets/images/error.svg'

function NotFound() {
    return (
        <div className='text-center my-5'>
            <img className='w-50 py-5' src={notFoundImg} alt="" />
        </div>
    )
}

export default NotFound