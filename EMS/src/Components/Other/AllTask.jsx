import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {

    const AuthData = useContext(AuthContext);
  return (
    <div id='Tasklist' className='bg-[#1c1c1c] p-5 rounded mt-5 overflow-auto '>
        <div className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between'>
                <h2 className='w-1/5 text-lg font-medium'>Name</h2>
                <h3 className='w-1/5 text-lg font-medium'>New Task</h3>
                <h5 className='w-1/5 text-lg font-medium '>Active Task</h5>
                <h5 className='w-1/5 text-lg font-medium '>Completed Task</h5>
                <h5 className='w-1/5 text-lg font-medium '>Failed Task</h5>
            </div>
        <div className='flex justify-between flex-col'>
            {AuthData.employees.map((elem)=>{
                return <div className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between'>
                <h2 className='w-1/5 text-lg font-medium'>{elem.name}</h2>
                <h3 className='w-1/5 text-lg font-medium text-blue-400'>{elem.taskNumbers.newTask}</h3>
                <h5 className='w-1/5 text-lg font-medium text-yellow-400'>{elem.taskNumbers.active}</h5>
                <h5 className='w-1/5 text-lg font-medium text-white'>{elem.taskNumbers.completed}</h5>
                <h5 className='w-1/5 text-lg font-medium text-red-600'>{elem.taskNumbers.failed}</h5>
            </div>
            })}
        </div>
       
    </div>
  )
}

export default AllTask