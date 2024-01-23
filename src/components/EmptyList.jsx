import React from 'react'

const EmptyList = ({ message }) => {
    return (
        <div className='text-center p-4 shadow-lg border-0 card m-3'>
            <h6>{message}</h6>
        </div>
    )
}

export default EmptyList