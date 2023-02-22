export function SearchInput() {
    return (
        <div>
            <div className="mt-3 mx-auto search_input">
                <input type="text" className="block w-11/12 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                 dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Search YieldLink" />
            </div>
        </div>
    )
}

export function SearchInputTopBar() {
    return (
        <div>
            <div className="mt-3 mx-auto search_input">
                <input type="text" className="block w-11/12 p-2 text-gray-900 border-none rounded-3xl border-0
                 bg-gray-50 sm:text-md focus:ring-green-500 focus:border-green-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" 
                placeholder="Search YieldLink" />
            </div>
        </div>
    )
}