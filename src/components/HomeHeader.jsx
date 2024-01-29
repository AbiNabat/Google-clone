import Link from "next/link";
import {TbGridDots} from "react-icons/tb";

export default function HomeHeader() {
    return (
        <header className='flex justify-end text-sm'>
            <div className='flex space-x-4 gap-4 p-3 m-3 items-center'>
                <Link href={"https://mail.google.com"}
                      className='hover:underline'>Gmail</Link>
                <Link href={"https://www.google.com/imghp?hl=ru&ogbl"}
                      className='hover:underline'>Images</Link>
                <TbGridDots className='bg-transparent hover:bg-gray-200 rounded-full text-3xl'/>
                <button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition'>Sign In</button>
            </div>



        </header>
    )
}