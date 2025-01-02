import React from 'react'
import { IoLogoFacebook } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div className='flex p-8 justify-between bg-blue-400 h-24'>
        {/* logo */}
        <div>
         <IoLogoFacebook size={40} />
        </div>

        {/* search bar */}
        <form className='flex items-center justify-between max-w-[800px] px-5 border-2 rounded-full w-full bg-white'>
          <input type="text" placeholder="What's on your mind"/>
          <IoIosSearch />
        </form>

        {/*top-right-corner  */}
        <div className='flex items-center gap-8'>
        <FaUserFriends size={30} />
        <AiOutlineMessage size={26}/>
        <BsGlobeCentralSouthAsia size={25}/>
        </div>

      </div>
    </>
  )
}

export default Header
