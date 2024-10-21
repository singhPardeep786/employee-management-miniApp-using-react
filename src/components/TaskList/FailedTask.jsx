import React from 'react'

const FailedTask = ({data}) => {
  return (
    <>
        <div className='flex-shrink-0 h-full w-[425px] bg-yellow-400 rounded-xl p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 px-5 py-2 rounded-lg'>{data.category}</h3>
                    <h4 className='text-sm text-black'>{data.date}</h4>
                </div>
                <h2 className='mt-5 text-3xl font-semibold text-black'>{data.title}</h2>
                <p className='text-sm mt-3 text-black'>{data.description}</p>
                <div className='mt-2'>
                    <button className='w-full bg-red-500'>Failed</button>
                </div>
        </div>
    </>
  )
}

export default FailedTask