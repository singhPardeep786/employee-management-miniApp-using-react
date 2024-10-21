import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <>
        <div className='flex-shrink-0 h-full w-[425px] bg-blue-400 rounded-xl p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 px-5 py-2 rounded-lg'>{data.category}</h3>
                    <h4 className='text-sm'>{data.date}</h4>
                </div>
                <h2 className='mt-5 text-3xl font-semibold'>{data.title}</h2>
                <p className='text-sm mt-3'>{data.description}</p>
                <div className='mt-2'>
                    <button className='w-full bg-green-600 py-1'>Completed</button>
                </div>
        </div>
    </>
  )
}

export default CompleteTask