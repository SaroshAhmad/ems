import React from 'react';

const AllTask = () => {
    const tasks = [
        { name: 'Ahmad', task: 'Design the new landing page', status: 'In Progress', bgColor: 'bg-blue-500' },
        { name: 'Sarah', task: 'Develop API for user data', status: 'Completed', bgColor: 'bg-green-500' },
        { name: 'John', task: 'Fix login authentication bug', status: 'Pending', bgColor: 'bg-yellow-500' },
        { name: 'Emily', task: 'Create marketing campaign graphics', status: 'In Progress', bgColor: 'bg-red-500' },
        { name: 'Michael', task: 'Write documentation for onboarding', status: 'Completed', bgColor: 'bg-purple-500' },
    ];

    return (
        <div className="bg-gray-50 dark:bg-gray-800 p-6 h-60 rounded-lg shadow-md mt-6 mb-6 max-w-4xl mx-auto space-y-4 overflow-auto">
            {tasks.map((task, index) => (
                <div key={index} className={`${task.bgColor} text-white py-3 px-5 flex justify-between items-center rounded-lg shadow`}>
                    <h2 className="text-lg font-semibold">{task.name}</h2>
                    <h3 className="text-md font-medium">{task.task}</h3>
                    <span className="text-sm font-light bg-gray-800 px-3 py-1 rounded-full">
                        {task.status}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default AllTask;
