import profile from '../img/profile.jpg';
import cover from '../img/cover.jpg';
import Image from 'next/image';
import { ClockIcon, MapIcon, MapPinIcon } from '@heroicons/react/24/solid';

export default function UserCard() {
    return (
        <div>
            <div>
                <div>
                    <Image
                        src={cover}
                        className="w-full mx-2 h-50 rounded-md"
                        alt='' />
                </div>
                <div className="flex">
                    <Image
                        src={profile}
                        className="w-40 mx-8 border-white border-3 h-40 rounded-full profile_img"
                        alt='' />
                    <button className='border bottom-2 border-green-600 h-10 py-auto px-2 my-auto rounded-md text-green-600 float-right'>Edit Profile</button>
                </div>
            </div>
            <div className='mx-8'>
                <h4 className='text-xl font-bold'>the Lost Fedora</h4>
                <p className='text-green-600'>Researcher</p>
                <p>no Abouts</p>
            </div>
            <div className="flex my-3">
                <div className='flex mx-4'>
                    <MapPinIcon className='h-5 w-5 m-auto text-gray-600'/>
                    <h5>Uganda</h5>
                </div>
                <div className='flex mx-4'>
                    <ClockIcon className='h-5 w-5 m-auto text-gray-600'/>
                    <h5>Born February 3rd 2001</h5>
                </div>
                <div className='flex mx-4'>
                    <ClockIcon className='h-5 w-5 m-auto text-gray-600'/>
                    <h5>Joined February 23rd 2023</h5>
                </div>
            </div>
        </div>
    )
}