import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    
    const [userData,setuserData] = useContext(AuthContext)


    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [date, setdate] = useState('')
    const [assignTo, setassignTo] = useState('')
    const [category, setcategory] = useState('')

    const [newTask, setnewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        setnewTask({ title, description, date, category, active: false, newTask: true, failed: false, completed: false })
        
        const data = userData

        data.forEach(function(elem){
            if(assignTo == elem.firstName){
                elem.tasks.push(newTask)
                elem.taskCount.newTask = elem.taskCount.newTask+1
            }
        });
        setuserData(data)

        
        setdate('')
        setcategory('')
        setdescription('')
        settitle('')
        setassignTo('')
    }
    return (

        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>

            <form onSubmit={(e) => { submitHandler(e) }} className='flex flex-wrap items-start w-full justify-between'>
                <div className='w-1/2 '>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task title</h3>
                        <input value={title} onChange={(e) => { settitle(e.target.value) }} className='mb-3 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border' type="text" placeholder='Make a UI design' />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input value={date} onChange={(e) => { setdate(e.target.value) }} className='mb-3 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border' type="date" />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <input value={assignTo} onChange={(e) => { setassignTo(e.target.value) }} className='mb-3 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border' type="text" placeholder='Employee Name' />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input value={category} onChange={(e) => { setcategory(e.target.value) }} className='mb-3 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border' type="text" placeholder='Design/Dev' />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>

                    <h3 className=' text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea value={description} onChange={(e) => { setdescription(e.target.value) }} className='mb-1 w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400' name="" id=""></textarea>
                    <button className='bg-emerald-500 py-1 hover:bg-emerald-600 px-3 rounded text-sm mt-4 w-full'>Create Task</button>

                </div>

            </form>
        </div>

    )
}

export default CreateTask
