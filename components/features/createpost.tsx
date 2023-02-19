import Image from "next/image"
import { LinkIcon, MapPinIcon, PhotoIcon } from "@heroicons/react/24/solid";
import profile from '../img/profile.jpg';


export default function Create_Post() {
    return (
        <div className="space-x-2 space-y-2 bg-gray-50 rounded-md p-3">
            <div className="space-x-4 space-y-4">
                <div className="flex mb-2">
                    <Image
                        src={profile}
                        className="rounded-full h-20 w-20 mr-5"
                    />
                    <input className="ms-5 block w-10/12 p-4 text-green-900 border border-green-300 rounded-lg bg-gray-80 sm:text-md focus:ring-green-500 focus:border-green-500 dark:bg-green-700 dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" type="text" placeholder="Ask/Offer Help ..." />
                </div>
                <div className="flex space-x-2">
                    <div className="flex pl-20">
                        <LinkIcon className="w-6 h-6 mx-5" />
                        <PhotoIcon className="w-6 h-6 mx-5" />
                        <MapPinIcon className="w-6 h-6 mx-5" />
                    </div>
                    <div className="div-end">
                        <button className="relative bg-green-600 px-5 rounded-2xl py-2 text-white  mx-2">Link</button>
                    </div>
                </div>
            </div>
        </div>
    )
}