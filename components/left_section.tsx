import Link from "next/link";
import { HomeIcon, HashtagIcon, ChartBarSquareIcon, PencilSquareIcon, BellIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import profile from './img/profile.jpg';


export default function Left_Bar() {
    return (
        <div className="h-screen pr-3 mx-2">
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
                <button className="bg-green-900 py-3 w-full px-5 text-xl text-white rounded-2xl">Link</button>
            </div>

            <div className="absolute mt-20">
                <div className="mx-2 flex p-1">
                <Image
                        src={profile}
                        className="rounded-full h-12 w-12 mr-5"
                        alt = ""
                    />
                    <Link href="profile">
                        <h5>Fedora</h5>
                        <h6 className="text-green-900">Researcher</h6>
                    </Link>
                </div>
            </div>
        </div>
    )
}