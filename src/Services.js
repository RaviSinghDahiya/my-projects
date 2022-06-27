
function Services(){
    let service =[
        {srvcTitle: 'FINANCIAL SERVICES', srvcSmallTitle:'AUTOMOBILE', imgsrc: './images/services.png' },
        {srvcTitle: 'ECOMMERCE & RETAIL', srvcSmallTitle:'EDUCATION', imgsrc: './images/services.png' },
        {srvcTitle: 'NON-PROFIT ORGANIZATION', srvcSmallTitle:'HEALTHCARE', imgsrc: './images/services.png' },
        {srvcTitle: 'INDUSTRIAL MANUFACTURING', srvcSmallTitle:'FARMACEUTICAL', imgsrc: './images/services.png' },
        {srvcTitle: 'AUTOMOBILE', srvcSmallTitle:'SOCIAL MEDIA', imgsrc: './images/services.png' },
        {srvcTitle: 'PHARMACETICAL', srvcSmallTitle:'SOCIAL MEDIA', imgsrc: './images/services.png' }
    ];
    return(
        <>
            <div className='py-10' id='services'>
                <div className='container m-auto'>
                    <div className='d-block mb-8'>
                        <h3 className='text-4xl font-bold text-slate-900 text-center'>Services</h3>
                    </div>
                    <div className='flex justify-between md:flex-row flex-wrap'>
                        {
                            service.map((abc)=>(
                                <div className='md:w-1/3 mb-5 px-2'  key={Math.random()}>
                                    <div className="shadow-teal-200 shadow">
                                        <img className='block m-auto' src={abc.imgsrc} />
                                        <div className='p-4 '>
                                            <p>{abc.srvcSmallTitle}</p>
                                            <h4 className='text-1xl font-bold text-slate-800 my-2'>{abc.srvcTitle}</h4>
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

export default Services;