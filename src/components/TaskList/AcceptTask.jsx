import React from 'react'

const AcceptTask = () => {
    return (
        <div className='shrink-0 h-full w-75 bg-red-300 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Food</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus doloremque asperiores neque dolor pariatur? Omnis?</p>
            <div className='flex justify-between mt-4 '>
                <button className='bg-green-500 py-1 px-2 text-sm'>Mark As Completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm'>Mark As Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask
