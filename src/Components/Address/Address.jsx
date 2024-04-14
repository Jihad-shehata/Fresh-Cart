import React from 'react'

function Address() {



    return (
        <form className='w-75 m-auto' >
            <label htmlFor="details" className='my-1'>Details:</label>
            <input type="text" className='form-control mb-3' id='details' name='details' />

            <label htmlFor="phone" className='my-1'>Phone:</label>
            <input type="tel" className='form-control mb-3' id='phone' name='phone' />

            <label htmlFor="city" className='my-1'>City:</label>
            <input type="text" className='form-control mb-3' id='city' name='city' />

            <button type='submit' className='btn bg-main px-3 text-white ms-auto d-block'>Order</button>
        </form>
    )
}

export default Address