import React from 'react'

const TaskList = () => {
    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto flex items-start justify-start gap-5 flex-nowrap mt-10 rounded-xl w-full py-5'>
            <div className='flex-shrink-0 rounded-xl h-full w-[300px] bg-yellow-400'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4>20 Feb 2024</h4>
                </div>
            </div>
        </div>
    )
}

export default TaskList