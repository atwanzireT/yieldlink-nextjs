import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Create_Post from "./features/createpost";
import { PostCard, PostTextCard } from "./features/postcard";


export default function Center_Section() {
    return (
        <div className="container px-2 border border-y-0 border-l-1 border-r-1 h-full px-5">
            <div className="flex sticky top-0 bg-white">
                <ArrowLeftIcon className="w-6 h-6 mb-3" />
                <h1 className="text-green-600 text-lg mb-3">Home</h1>
            </div>
            <Create_Post />

            <div className="container">
                <h6 className="text-green-600 text-2xl py-2">View All Issues</h6>
            </div>
            <div className="mx-auto">
                <PostCard />
                <PostTextCard />
            </div>

        </div>
    )
}