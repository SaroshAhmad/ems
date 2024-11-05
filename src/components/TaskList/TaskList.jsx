import React from 'react'

const TaskList = () => {
    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto flex items-centre justify-start gap-5 flex-nowrap mt-10 rounded-xl w-full py-5'>
            <div className='flex-shrink-0 rounded-xl h-full w-[300px] bg-red-400 p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='flex text-md px-3 '>20 Feb 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Complete Google PMP</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, natus architecto aperiam repudiandae adipisci error?</p>
            </div>
            <div className='flex-shrink-0 rounded-xl h-full w-[300px] bg-green-400 p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='flex text-md px-3 '>20 Feb 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Complete Google PMP</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, natus architecto aperiam repudiandae adipisci error?</p>
            </div>
            <div className='flex-shrink-0 rounded-xl h-full w-[300px] bg-blue-400 p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='flex text-md px-3 '>20 Feb 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Complete Google PMP</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, natus architecto aperiam repudiandae adipisci error?</p>
            </div>
            <div className='flex-shrink-0 rounded-xl h-full w-[300px] bg-orange-400 p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='flex text-md px-3 '>20 Feb 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Complete Google PMP</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, natus architecto aperiam repudiandae adipisci error?</p>
            </div>
        </div>
    )
}

export default TaskList