import { BookmarkIcon, UserIcon } from "@heroicons/react/24/solid";
import {SearchInputTopBar} from "./searchbox";
import logo from './img/logo_white.png';
import Image from "next/image";
import profile from './img/profile.jpg';


export default function Topbar() {
    return (
        <div className="sticky top-0 mb-1 z-50 bg-green-600">
            <div className="flex my-0">
                <div className="left_bar flex">
                    <div className="my-auto ml-3">
                        <Image
                            src={logo}
                            className="w-10 h-10 my-auto "
                        />
                    </div>
                    <h2 className="text-white text-3xl my-auto">YieldLink</h2>
                </div>
                <div className=" center-section w-4/12">
                    <div>
                        <SearchInputTopBar />
                    </div>
                </div>
                <div className="right_bar">
                    <div className="flex float-right m-3">
                        <BookmarkIcon className="h-7 w-7 text-white my-auto mx-5"/>
                        <Image
                            src={profile}
                            className="rounded-full h-10 w-10 mr-5"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}