import { useEffect, useState } from "react";
import React from "react";
import Axios from 'axios';

function Product(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/posts")
        //Axios.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
        .then((response)=>{
            setData(response.data);
            //console.log(response.data)
        })
    }, []);
    

    return(
        <>
            <div className='py-10' id='products'>
                <div className='container m-auto'>
                    <div className='d-block mb-8'>
                        <h3 className='text-4xl font-bold text-slate-900 text-center'>Blogs</h3>
                    </div>
                    <div className='flex justify-between md:flex-row flex-wrap'>
                    {
                        data.map((props) => (
                        <div className='md:w-1/4 mb-5 px-2' key={props.id}>
                            <div className='shadow-teal-200 shadow'>
                                <div className="p-3">
                                    <small>{props.id}</small>
                                    <h6 className='mb-2 text-2xl font-bold text-slate-900'>{props.title}</h6>
                                    <p>{props.body}</p>
                                </div>
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

export default Product;