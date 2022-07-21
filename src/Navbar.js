import React, { useState } from 'react';
import logo from './logo.svg';
import { IoMdMenu, IoMdClose } from "react-icons/io";


function Navbar(){
    let Links = [
        {name:"Home", link:"/"},
        {name:"About Us", link:"/#about"},
        {name:"Services", link:"/#services"},
        {name:"Team", link:"/#team"},
        {name:"Faqs", link:"/#faqs"},
        {name:"Blog", link:"/#blog"},
        {name:"Contact Us", link:"/"},
    ];

    let [open,setOpen] = useState(false);


    return(
        <>
            <nav className="bg-white w-full md:p-2 md:pr-6 md:flex md:items-center md:justify-between">
                <div className='flex justify-between items-center md:pr-0 pr-6'>
                    <span className='cursor-pointer'>
                        <img className='h-20 inline' src={logo} />
                    </span>
                    <span onClick={()=>setOpen(!open)} className='cursor-pointer text-3xl md:hidden block'>
                        {open? <IoMdClose />: <IoMdMenu />}                        
                    </span>
                </div>
                
                <ul className={`md:flex md:items-center z-[999] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:p-0 p-2 md:opacity-100 top[-400px]                 transition-all ease-in duration-500 ${open ? 'top-20' : 'top-[-490px]'}`}>
                    {
                        Links.map((props)=>(
                            <li className='ml-9 mb-2 md:mb-0'  key={Math.random()}>
                                <a href={props.link} className=' text-xl hover:text-blue-500'>{props.name}</a>
                                
                            </li>
                        ))
                    }
                    
                </ul>
                
            </nav>
        </>
    )
}

export default Navbar;