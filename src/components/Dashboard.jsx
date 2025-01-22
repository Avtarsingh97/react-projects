import React from 'react'

function Dashboard({users}) {
  
  const loggedUser = users.length > 0 ? users[0] : '';
  
  

  return (
    <div className='text-white'>
      <div className="about p-10">
        <h1 className='text-4xl py-6'>Welcome, <span className='text-xl'>{loggedUser.fullName}</span></h1>
        <h3 className='text-2xl py-6'>Dashboard</h3>
        <div className="dashboard border border-rose-500 w-full p-2">
            <div>Coming Soon.......</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard