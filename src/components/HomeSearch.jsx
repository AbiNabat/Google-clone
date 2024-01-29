"use client";
import {AiOutlineSearch} from "react-icons/ai";
import {BsFillMicFill} from "react-icons/bs";
import {useState} from "react";
import {useRouter} from "next/navigation";
export default function HomeSearch() {
    const [input, setInput] = useState('');
    const router = useRouter();
    const handlerSubmit = (e) => {
        e.preventDefault();
        router.push(`/search/web/searchTerm=${input}`);
    }
    const randomSearch =  (e) => {
        e.preventDefault();
    }
    return (
        <>
       <form
           onSubmit={handlerSubmit}
           className={'flex w-full mt-5 mx-auto m-w-[90%] border border-gray-200 px-5 py-3 rounded-xl hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'}
       >
           <AiOutlineSearch className={'text-xl text-gray-500 mr-3'}/>
           <input type={"text"} className={'flex-grow focus:outline-none'} onChange={e => setInput(e.target.value) } />
           <BsFillMicFill className={'text-lg'}/>
       </form>
            <div className={'flex flex-col space-x-2 sm:space-x-0 justify-center sm:flex-row mt-8 gap-2'}>
                <button
                    onClick={handlerSubmit}
                    className={'bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow'}>Google
                    Search
                </button>
                <button
                    className={'bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow'}>Lucky
                </button>
            </div>
        </>
    )
}