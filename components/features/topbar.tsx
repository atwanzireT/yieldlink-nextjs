import { UserIcon } from "@heroicons/react/24/solid";
import SearchInput from "./searchbox";
import logo from './img/logo.png';
import Image from "next/image";


export default function Topbar() {
    return (
        <div className="sticky top-0 mb-3 z-50">
            <div className="flex my-2">
                <div className="left_bar">
                    <div className="mt-5">
                        <Image
                            src={logo}
                            className="w-10 h-10 "
                        />
                    </div>
                    <h2>YieldLink</h2>
                </div>
                <div className=" center-section">
                    <div>
                        <SearchInput />
                    </div>
                </div>
                <div className="right_bar">
                    <div className="flex float-right">
                        <UserIcon className="h-7 w-7" />
                    </div>
                </div>
            </div>
        </div>
    )
}