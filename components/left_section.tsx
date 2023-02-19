import Link from "next/link";
import logo from './img/logo.png';
import { HomeIcon, HashtagIcon, ChartBarSquareIcon, PencilSquareIcon, BellIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Left_Bar() {
    return (
        <div className="h-screen pr-3">
            <div className="mt-5">
                <Image
                    src={logo}
                    className="w-20 h-20 "
                />
            </div>
            <div className="flex items-center space-x-2  my-3 me-5">
                <Link href="/">
                    <HomeIcon className="w-7 h-7 mx-1" />
                </Link>
                <Link href="/" className="text-2xl">Home</Link>
            </div>
            <div className="flex items-center space-x-2  my-3">
                <HashtagIcon className="w-7 h-7 mx-1" />
                <Link href="explore" className="text-2xl">Explore</Link>
            </div>
            <div className="flex items-center space-x-2  my-3">
                <PencilSquareIcon className="w-7 h-7 mx-1" />
                <Link href="research" className="text-2xl">Research</Link>
            </div>
            <div className="flex items-center space-x-2  my-3">
                <BellIcon className="w-7 h-7 mx-1" />
                <Link href="#" className="text-2xl">Notifications</Link>
            </div>
            <div className="flex items-center space-x-2  my-3">
                <ChartBarSquareIcon className="w-7 h-7 mx-1" />
                <Link href="#" className="text-2xl">Statistics</Link>
            </div>
            <div className="flex items-center space-x-2  my-3">
                <UserCircleIcon className="w-7 h-7 mx-1" />
                <Link href="#" className="text-2xl">Profile</Link>
            </div>
            <div className="mx-10">
                <button className="bg-green-600 py-3 w-full px-5 text-xl text-white rounded-2xl">Link</button>
            </div>
        </div>
    )
}