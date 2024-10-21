import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)    

    const [title, setTaskTitle] = useState('')
    const [date, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')
    const [description, setTaskDescription] = useState('')

    const [newtask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({
            title,
            description,
            date,
            category,
            active:false,
            new_task:true,
            failed:false,
            completed:false,
        })


        const data = userData
        
        data.forEach(function(elem){
            if(asignTo == elem.firstName){
                elem.tasks.push(newtask)
                elem.taskNumbers.new_task = elem.taskNumbers.new_task + 1
            }
        })

        setUserData(data)
        console.log(data);

        setTaskTitle('')
        setTaskDate('')
        setAsignTo('')
        setCategory('')
        setTaskDescription('')
        
    }
    
  return (
    <>
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }} 
                className='flex flex-wrap items-start justify-between w-full'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input type="text" 
                        value={title}
                        onChange={(e)=>{
                            setTaskTitle(e.target.value)
                        }}
                        placeholder='Main UI Design' 
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'  
                        />
                    </div>
                    <div className='mt-4'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input type="date"
                        value={date}
                        onChange={(e)=>{
                            setTaskDate(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'  
                         />
                    </div>    

                    <div className='mt-4'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <input type="text"
                        value={asignTo}
                        onChange={(e)=>{
                            setAsignTo(e.target.value)
                        }}
                        placeholder='Employee Name'
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'  
                        />
                    </div>

                    <div className='mt-4'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input type="text"
                        value={category}
                        onChange={(e)=>{
                            setCategory(e.target.value)
                        }}
                        placeholder='design, dev, etc'
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'  
                        />
                    </div>
                </div>
                <div className='w-1/2 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea value={description}
                        onChange={(e)=>{
                            setTaskDescription(e.target.value)
                        }} name="" cols="30" rows="10" id="" className='w-full h-44 text-sm px-4 py-2 rounded outline-none bg-transparent border-[1px] border-gray-400'></textarea>
                    <button className='bg-emerald-500 py-3 px-5 rounded text-sm mt-4 w-full hover:bg-emerald-600 transition duration-450 ease-linear'>Create Task</button>
                </div>     
                </form>
            </div>
    </>
  )
}

export default CreateTask