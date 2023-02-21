import Interests from "./features/interests";

export default function Right_Section(){
    return(
        <div className="mx-2">
            <div className="mt-3">
                <input type="text" className="block w-11/12 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Search Harvest" />
            </div>

            <div className="bg-gray-50 mr-5 pl-10 pr-5 mt-2 rounded-md w-11/12 block  border-gray-300">
                <Interests/>
            </div>
        </div>
    )
}