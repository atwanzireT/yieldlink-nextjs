import axios from "axios"
import { useEffect, useState } from "react";

interface topicItemstypes {
    id: string,
    title: string,
    category: string,
}

const fetchTopics = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/api/v1/topics/");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export default function Interests() {
    const [topic, setTopic] = useState<topicItemstypes[]>([])

    useEffect(() => {
        const fetchTopicsFromAPI = async () => {
            const topic = await fetchTopics();
            setTopic(topic);
        };
        fetchTopicsFromAPI
    }, [])
    console.log(topic)

    return (
        <div>
            <div className="px-2 w-full py-3">
                <div className="text-center py-2">
                    <h5 className="text-green-600">Your Interest Topics ...</h5>
                </div>
                { topic.map(
                    (item) => (
                        <div key={item.id}>
                            <div className="container my-2">
                                <h6 className="text-green-600">
                                    {item.category}
                                </h6>
                                <p>{item.title}</p>
                                <p className="text-green-300 text-sm">123 Following</p>
                            </div>
                            <hr />
                        </div>
                    )
                )}
            </div>
        </div>
    )
}