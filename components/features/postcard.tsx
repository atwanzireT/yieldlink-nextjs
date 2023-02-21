import Image from "next/image";
import profile from './img/profile.jpg';
import { BookmarkIcon, ChatBubbleBottomCenterIcon, HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useState, useEffect } from "react";


interface itemsType {
    id: string,
    title: string,
    image: string,
    author_name: string,
    user_type: string,
}

const fetchPosts = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/api/v1/posts/");
        return response.data;
    } catch (error) {
        alert(error);
    }
}

export function PostCard() {
    const [post, setPost] = useState<itemsType[]>([]);

    useEffect(() => {
        const fetchPostsFromAPI = async () => {
            const post = await fetchPosts();
            setPost(post);
        };
        fetchPostsFromAPI();
    }, [])

    console.log(post)

    return (
        <div>
            {post.map(
                item => (
                    // @ts-ignore
                    <div key={item.id} className="justify-items-center my-3  bg-gray-50 rounded-md p-3  ">
                        <div className="m-3">
                            <div className="flex">
                                <Image
                                    src={profile}
                                    className="rounded-full w-20 w-20"
                                    alt=""
                                />
                                <div className="m-1">
                                    <h5 className="text-gray-600 ">{item.author_name}</h5>
                                    <h6 className="text-green-600">{item.user_type}</h6>
                                </div>
                            </div>
                            <div className="post_content_div mt-3 mx-auto">
                                <p>{item.title} </p>
                                <div className="mt-2">
                                    <img
                                        src={item.image}
                                        className="rounded-md post_img" 
                                        alt=""/>
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
            )}
        </div>
    )
}
