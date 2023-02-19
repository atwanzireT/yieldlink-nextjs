import { PostCard, PostTextCard } from "../postcard"
import SearchInput from "../searchbox"

function Tread() {
    return (
        <div>
            <div className="container my-2">
                <h6 className="text-green-600">
                    Tread
                </h6>
                <p>Coffee Prices Raise</p>
                <p className="text-green-300 text-sm">123 Following</p>
            </div>
            <hr />
        </div>
    )
}
export default function Explore_body() {
    return (
        <div className="container px-2 border border-y-0 border-l-1 border-r-1 h-full px-5">
            <div className="my-3 mx-auto">
                <SearchInput />
            </div>
            <h3 className="text-green-800 text-2xl ">Coffee Treads in Uganda</h3>
            <div>
                <Tread />
                <Tread />
                <Tread />
                <Tread />
                <Tread />
            </div>
            <div>
                <PostCard />
                <PostTextCard />
            </div>
        </div>
    )
}