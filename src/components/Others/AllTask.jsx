import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Alltask = () => {

    const [userData, setUserData] = useContext(AuthContext)    
    
  return (
    <>
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded'>
            <div className='w-full mb-4 py-2 px-4 flex justify-between rounded bg-green-600'>
                <h2 className='w-1/5 text-lg font-medium'>Employee Name</h2>
                <h3 className='w-1/5 text-lg font-medium'>New Task</h3>
                <h5 className='w-1/5 text-lg font-medium'>Active Task</h5>
                <h5 className='w-1/5 text-lg font-medium'>Completed</h5>
                <h5 className='w-1/5 text-lg font-medium'>Failed</h5>
            </div>
           <div className=''>
            {userData.map(function(elem, index){
                return <div key={index} className=' mb-4 py-2 px-4 flex justify-between rounded border border-zinc-400'>
                <h2 className='w-1/5 text-lg'>{elem.firstName}</h2>
                <h3 className='w-1/5 text-lg text-blue-400 font-medium'>{elem.taskNumbers.new_task}</h3>
                <h5 className='w-1/5 text-lg text-yellow-500 font-medium'>{elem.taskNumbers.active}</h5>
                <h5 className='w-1/5 text-lg text-green-500 font-medium'>{elem.taskNumbers.completed}</h5>
                <h5 className='w-1/5 text-lg text-red-500 font-medium'>{elem.taskNumbers.failed}</h5>
            </div>
            })}
           </div>
           
        </div>
    </>
  )
}

export default Alltask