import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[360px] p-5 bg-red-400 rounded-xl ">
			<div className="flex justify-between items-center">
				<h3 className="bg-red-600 px-3 text-sm py-1 rounded">{data.category}</h3>
				<h4 className="text-sm"> {data.date}</h4>
			</div>
			<h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
			<p className="text-sm mt-2">
				{data.description}
			</p>
			<div className='flex justify-between'>
				<button className="bg-green-500 px-3 py-[0.2rem] mt-[10vh] text-sm rounded-md">
                    Completed
				</button>
				<button className="bg-red-500 px-3 py-[0.2rem] mt-[10vh] text-sm rounded-md">
                    failed
				</button>
			</div>
		</div>
  )
}

export default NewTask