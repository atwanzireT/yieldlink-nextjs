function InterestCard() {
    return (
        <div>
            <div className="container my-2">
                <h6 className="text-green-600">
                    Insterest
                </h6>
                <p>Coffee Prices Raise</p>
                <p className="text-green-300 text-sm">123 Following</p>
            </div>
            <hr />
        </div>
    )
}
export default function Interests() {
    return (
        <div>
            <div className="px-2 w-full">
                <div className="text-center">
                    <h5 className="text-green-600">Your Interest ...</h5>
                </div>
                <InterestCard />
                <InterestCard />
                <InterestCard />
            </div>
        </div>
    )
}