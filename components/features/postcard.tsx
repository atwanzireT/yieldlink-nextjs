import Image from "next/image";
import profile from '../img/profile.jpg';
import coffee_beans from '../img/coffee_beans.jpg'
import { BookmarkIcon, ChatBubbleBottomCenterIcon, HeartIcon, StarIcon } from "@heroicons/react/24/solid";


export function PostCard() {
    return (
        <div className="justify-items-center my-3  bg-gray-50 rounded-md p-3  ">
            <div className="m-3">
                <div className="flex">
                    <Image
                        src={profile}
                        className="rounded-full w-20 w-20"
                    />
                    <div className="m-1">
                        <h5 className="text-gray-600 ">Lost Fedora</h5>
                        <h6 className="text-green-600">Researcher</h6>
                    </div>
                </div>
                <div className="post_content_div mt-3 mx-auto">
                    <p>Quality coffee Beans. </p>
                    <div className="mt-2">
                        <Image
                            src={coffee_beans}
                            className="rounded-md post_img" />
                    </div>

                    <div className="flex m-1">
                        <ChatBubbleBottomCenterIcon className="w-6 h-6 mx-2" />
                        <HeartIcon className="w-6 h-6 mx-2" />
                        <BookmarkIcon className="w-6 h-6 mx-2" />
                        <StarIcon className="w-6 h-6 mx-2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export function PostTextCard() {
    return (
        <div className="justify-items-center my-3  bg-gray-50 rounded-md p-3 ">
            <div className="flex">
                <Image
                    src={profile}
                    className="rounded-full w-20 w-20"
                />
                <div className="m-1">
                    <h5 className="text-gray-600 ">Lost Fedora</h5>
                    <h6 className="text-green-600">Researcher</h6>
                </div>
            </div>
            <div className="post_content_div mt-3">
                <p>How can i treat swine flu in piggery. </p>
                <div className="flex m-1">
                    <ChatBubbleBottomCenterIcon className="w-6 h-6 mx-2" />
                    <HeartIcon className="w-6 h-6 mx-2" />
                    <BookmarkIcon className="w-6 h-6 mx-2" />
                    <StarIcon className="w-6 h-6 mx-2" />
                </div>
            </div>
        </div>
    )
}