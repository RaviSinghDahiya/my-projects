
function About(){
    return(
        <>
            <div id='about'>
                <div className='container m-auto pt-10 pb-10'>
                    <div className='flex justify-between items-center md:flex-row flex-wrap'>
                        <div className='md:w-3/6 w-full pl-4 pr-4'>
                            <h1 className='text-4xl'><img src='./images/about.jpg' /></h1>
                        </div>
                        <div className='md:w-3/6 w-full pl-4 pr-4 sm:pb-4'>
                            <h1 className='text-7xl font-bold capitalize mb-4'>Can Create Enterprise Value</h1>
                            <p className='text-2xl'>EXPLORE HOW CRM, CMS, DATASCIENCE, WEB DEVELOPMENT</p>
                            <a href='' className='text-1xl mt-3 inline-block p-2 pl-5 pr-5 text-white bg-blue-500 rounded-3xl hover:bg-black'>Know More</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default About