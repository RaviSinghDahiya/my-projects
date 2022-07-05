
function Hero() {
    let Choose = [
        {title:"CMS", imgsrc:'./images/icon-1.png', desc:"Over the last 37 years, CMS has played a very important role in helping customers win over multiple financial cycles."},
        {title:"CRM", imgsrc:'./images/icon-2.png', desc:"Customer relationship management (CRM) and the showcasing, deals, and client care capacities and procedures for your business."},
        {title:"Cloud Computing", imgsrc:'./images/icon-3.png', desc:"Bugendaitech has empowered plan, improvement, mix and dispatch of successful cloud-based applications for some associations over the globe."},
        {title:"Data Science", imgsrc:'./images/icon-4.png', desc:"Bugendai Tech experts on Data Science can help you to draw accessible insights from Big Data to understand their customers and keep them engaged."},
        {title:"Mobile APP", imgsrc:'./images/icon-5.png', desc:"Customer relationship management (CRM) and the showcasing, deals, and client care capacities and procedures for your business."},
        {title:"CMS", imgsrc:'./images/icon-2.png', desc:"Over the last 37 years, CMS has played a very important role in helping customers win over multiple financial cycles."}
    ];
    return (
        <>
            <div className="Hero">
                <div className='container m-auto pt-10 pb-10'>
                    <div className='flex justify-between items-center md:flex-row flex-wrap'>
                        <div className='md:w-3/6 w-full pl-4 pr-4 sm:pb-4'>
                            <h1 className='text-7xl font-bold capitalize mb-4'>Can Create Enterprise Value</h1>
                            <p className='text-2xl'>EXPLORE HOW CRM, CMS, DATASCIENCE, WEB DEVELOPMENT</p>
                            <a href='' className='text-1xl mt-3 inline-block p-2 pl-5 pr-5 text-white bg-blue-500 rounded-3xl hover:bg-black'>Know More</a>
                        </div>
                        <div className='md:w-3/6 w-full pl-4 pr-4'>
                            <h1 className='text-4xl'><img src='./images/banner.png' /></h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-10 bg-slate-50'>
                <div className='container m-auto'>
                    <div className='d-block mb-8'>
                        <h3 className='text-4xl font-bold text-slate-900 text-center'>Why Choose Us</h3>
                    </div>
                    <div className='flex justify-between md:flex-row flex-wrap'>
                        {
                            Choose.map((props)=>(
                                <div className='md:w-1/3 mb-5 px-2'  key={Math.random()}>
                                    <div className="p-6 bg-white shadow-teal-200 shadow text-center">
                                        <img className='block m-auto' src={props.imgsrc} />
                                        <h4 className='text-2xl font-bold text-slate-800 my-2'>{props.title}</h4>
                                        <div className="choose-txt">
                                            <p>{props.desc}</p>
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

export default Hero;