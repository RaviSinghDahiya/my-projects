import React, { useState } from 'react';
import Faqsdata from "./Faqsdata";
import { FaPlus, FaMinus } from "react-icons/fa";

function Faqs(){

    const [selected,setSelected] = useState(null);

    const toggle = (i) => {
        if (selected == i){
            return setSelected(null)
        }
        
        setSelected(i)
    }

    return(
        <>
            <div className='py-10 bg-slate-50' id='faqs'>
                <div className='container m-auto'>
                    <div className='d-block mb-8'>
                        <h3 className='text-4xl font-bold text-slate-900 text-center'>Faqs</h3>
                    </div>
                    <div className='accordion'>
                        {
                            Faqsdata.map((item, i) => (
                                <div className='md:w-12/1 mb-5 px-2' key={Math.random()}>
                                    <div className='shadow-teal-200 shadow bg-white'>
                                        <div className="title p-3 cursor-pointer flex justify-between items-center" onClick={()=> toggle(i)}>
                                            <h3 className='m-0 text-lg font-bold text-slate-900'>{item.title}</h3>
                                            <span className='text-xs title-icon'>
                                                {selected ===i ? <FaMinus /> : <FaPlus />}            
                                            </span>
                                        </div>
                                        <div className={selected ===i ? "tab-content p-3 show" : "tab-content hide"}><p>{item.answer}</p></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faqs;