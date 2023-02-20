import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Left_Bar from '@/components/left_section'
import Center_Section from '@/components/center_section'
import Right_Section from '@/components/right_section'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div className="flex">
        <div className="w-2/12 fixed left-2">
          <Left_Bar/>
        </div>
        <div className="w-6/12 space-x-2 justify-center relative center-section">
          <div className="mx-auto">
            <Center_Section/>
          </div>
        </div>
        <div className="w-3/12 justify-center fixed left-8/12 right-2">
          <Right_Section/>
        </div>
      </div>
    </div>
  )
}
