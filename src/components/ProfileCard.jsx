import React from 'react'
import { LiaUserEditSolid, IoSettingsOutline, MdLogout } from "../utils/constants";
import avatar from '../assets/avatar.png'
import { useAuth } from '../context/Auth';

const ProfileCard = () => {

    const user = JSON.parse(localStorage.getItem('signupData'))
    const { signOut } = useAuth()

    return (
        <div className='absolute right-0 top-2 w-[20vw] p-4 text-white rounded-lg mt-16 bg-gradient-to-t from-black to-zinc-800'>
            <div className='flex flex-col items-center justify-center'>
                <img src={avatar} alt="" className='w-[75px] mt-1 rounded-full shadow-[2px_2px_22px_1px_#000] hover:shadow-zinc-700' />
                <p className='font-semibold text-lg mt-4'>{user.name}</p>
                <p className='font-medium text-xs mb-4 text-zinc-500'>{user.email}</p>
            </div>
            <div>
                <button
                    className='w-full h-10 font-medium flex items-center gap-3 px-2 text-sm rounded-lg text-zinc-500 hover:text-zinc-300 outline-none hover:bg-gradient-to-r from-zinc-900 to-zinc-800 hover:border border-zinc-600 '
                >
                    <LiaUserEditSolid className='text-lg ' />
                    <p className=''>Edit Profile</p>
                </button>
                <button
                    className='w-full h-10 font-medium flex items-center gap-3 px-2 text-sm rounded-lg text-zinc-500 hover:text-zinc-300 outline-none hover:bg-gradient-to-r from-zinc-900 to-zinc-800 hover:border border-zinc-600 '
                >
                    <IoSettingsOutline className='text-lg' />
                    <p>Settings</p>
                </button>
                <button
                    className='w-full h-10 font-medium flex items-center gap-3 px-2 text-sm rounded-lg text-zinc-500 hover:text-zinc-300 outline-none hover:bg-gradient-to-r from-zinc-900 to-zinc-800 hover:border border-zinc-600 '
                    onClick={signOut}
                >
                    <MdLogout className='text-lg' />
                    <p>Logout</p>
                </button>
            </div>
        </div>
    )
}

export default ProfileCard