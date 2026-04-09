import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='mt-10 flex justify-between gap-5 screen'>
        <div className='rounded-xl w-[40%] bg-red-400 px-9 py-6'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[40%] bg-blue-400 px-9 py-6'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[40%] bg-green-400 px-9 py-6'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className=' rounded-xl w-[40%] bg-yellow-300 px-9 py-6'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}
 
export default TaskListNumbers
