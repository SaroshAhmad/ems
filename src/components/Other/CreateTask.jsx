import React from 'react'

const CreateTask = () => {
    return (
        <div className="mt-10 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Create a New Task</h1>
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="task-title" className="block text-sm font-medium text-gray-900 dark:text-gray-300">
                            Task Title
                        </label>
                        <input
                            type="text"
                            id="task-title"
                            placeholder="Task title"
                            className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="task-desc" className="block text-sm font-medium text-gray-900 dark:text-gray-300">
                            Description
                        </label>
                        <textarea
                            id="task-desc"
                            cols="30"
                            rows="4"
                            placeholder="Task description"
                            className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="task-date" className="block text-sm font-medium text-gray-900 dark:text-gray-300">
                            Date
                        </label>
                        <input
                            type="date"
                            id="task-date"
                            className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="task-assign" className="block text-sm font-medium text-gray-900 dark:text-gray-300">
                            Assign to
                        </label>
                        <input
                            type="text"
                            id="task-assign"
                            placeholder="Employee name"
                            className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="task-category" className="block text-sm font-medium text-gray-900 dark:text-gray-300">
                            Category
                        </label>
                        <input
                            type="text"
                            id="task-category"
                            placeholder="design, dev, etc."
                            className="w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            required
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full md:w-auto mt-4 px-5 py-2.5 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                    Create Task
                </button>
            </form>
        </div>
    )
}

export default CreateTask