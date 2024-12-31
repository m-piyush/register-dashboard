import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
function Top() {
    return (
        <div className='hidden md:flex justify-end items-center py-2 pr-16 gap-8 bg-[#1C4670] text-white shadow-md'>
            <h1 className='flex items-center gap-2'> <MdEmail /> www.registerkaro.in</h1>
            |
            <h1 className='flex items-center gap-2'><FaPhone />+918447746183</h1>
            |
            <div className='flex gap-6'>
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
                <FaPinterest />
            </div>

        </div>
    )
}

export default Top