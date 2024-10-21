import React, { useState } from 'react'

const Header = (props) => {
  
  // const [userName, setUserName] = useState('')

  // if(!data){
  //   setUserName('Admin')
  // }else{
  //   setUserName(data.firstName)
  // }

  const logOut = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }
  
  return (
    <>
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl'> userName 👋</span></h1>
            <button onClick={logOut} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
        </div>
    </>
  )
}

export default Header