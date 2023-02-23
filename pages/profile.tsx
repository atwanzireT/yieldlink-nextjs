import UserCard from "@/components/features/profile/userCard";
import Topbar from "@/components/features/topbar";
import Left_Bar from "@/components/left_section";

export default function Profile(){
    return(
        <div>
    <div>
      <Topbar/>
      <div className="flex">
        <div className="w-2/12 fixed left-2">
          <Left_Bar/>
        </div>
        <div className="w-6/12 space-x-2 justify-center relative center-section">
          <div className="mx-auto">
            <UserCard/>
          </div>
        </div>
        <div className="w-3/12 justify-center fixed left-8/12 right-2">
          {/* <Right_Section/> */}
        </div>
      </div>
    </div>
        </div>
    )
}