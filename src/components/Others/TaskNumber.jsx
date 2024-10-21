import React from 'react'

const TaskNumber = ({data}) => {
  return (
    <>
        <div className='flex mt-10 justify-between gap-5 w-full'>
            <div className='px-9 py-10 rounded-xl w-[24%] bg-red-400'>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.new_task}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>   
            </div>
            <div className='px-9 py-10 rounded-xl w-[24%] bg-blue-400'>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
                <h3 className='text-xl font-medium'>Completed</h3>   
            </div>
            <div className='px-9 py-10 rounded-xl w-[24%] bg-green-400'>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
                <h3 className='text-xl font-medium'>Active</h3>   
            </div>
            <div className='px-9 py-10 rounded-xl w-[24%] bg-yellow-400'>
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
                <h3 className='text-xl font-medium'>Failed</h3>   
            </div>
        </div>
    </>
  )
}

export default TaskNumber