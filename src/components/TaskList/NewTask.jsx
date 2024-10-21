import React from 'react'

const NewTask = ({data}) => {
  return (
    <>
        <div className='flex-shrink-0 h-full w-[425px] bg-green-400 rounded-xl p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 px-5 py-2 rounded-lg'>{data.category}</h3>
                    <h4 className='text-sm'>{data.date}</h4>
                </div>
                <h2 className='mt-5 text-3xl font-semibold'>{data.title}</h2>
                <p className='text-sm mt-3'>{data.description}</p>
                <div className='mt-4'>
                    <button className='bg-blue-600 px-2 py-1'>Accept Task</button>
                </div>
        </div>
    </>
  )
}

export default NewTask