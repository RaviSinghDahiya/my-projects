import { useEffect, useState } from "react";
import React from "react";
import Axios from 'axios';
import ReactPaginate from 'react-paginate';

function Product(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            setData(response.data);
        })
    }, []);
    
    const fetchComments = async (currentPage) => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${10}`
        );
        const data = await res.json();
        return data;
      };

      const handlePageClick = async (data) => {
        let currentPage = data.selected + 1;

        const commentsFormServer = await fetchComments(currentPage);

        setData(commentsFormServer);
    }

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

                    <div className='flex justify-between md:flex-row flex-wrap'>
                        <ReactPaginate
                            breakLabel={"..."}
                            nextLabel={"Next >"}
                            previousLabel={'< Previous'}
                            pageCount={10}
                            pageRangeDisplayed={2}
                            marginPagesDisplayed={1}
                            onPageChange={handlePageClick}
                            containerClassName={"m-auto my-4 flex justify-content-center"}
                            pageClassName={'px-1'}
                            pageLinkClassName={'rounded-lg px-2 py-1 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'}
                            previousLinkClassName={'rounded-lg px-2 py-1 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'}
                            nextLinkClassName={'rounded-lg px-2 py-1 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'}
                            breakLinkClassName={'rounded-lg px-2 py-1 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'}
                            
                            activeLinkClassName={'bg-slate-100 text-slate-900'}
                        />
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default Product;