import Topbar from '@/components/features/topbar'
import Image from 'next/image'
import Left_Bar from '../components/left_section'
import Right_Section from '../components/right_section'


export default function Research() {
  return (
    <div>
      <Topbar/>
      <div className="flex">
        <div className="w-2/12 fixed left-2">
          <Left_Bar/>
        </div>
        <div className="w-7/12 space-x-2 justify-center relative center-section">
          <div className="mx-auto">
            {/* <Center_Section/> */}
          </div>
        </div>
        <div className="w-2/12 justify-center fixed left-8/12 right-2">
          <Right_Section/>
        </div>
      </div>
    </div>
  )
}