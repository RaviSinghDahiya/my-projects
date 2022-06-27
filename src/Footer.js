import logo from './logo.svg';

function Footer(){
    let Ftmenu1 = [
        {mname1: 'CMS', link1:'/'},
        {mname1: 'CRM', link1:'/'},
        {mname1: 'Cloud Computing', link1:'/'},
        {mname1: 'Data Science', link1:'/'},
        {mname1: 'Mobile App', link1:'/'},
    ];
    let Ftmenu2 = [
        {mname2: "Contact", link2: "/"},
        {mname2: "Privacy Policy", link2: "/"},
        {mname2: "Terms Conditions", link2: "/"},
    ];
    let Ftmenu3 = [
        {mname3: "About Us", link3:"/"},
        {mname3: "Service", link3:"/"},
        {mname3: "Events", link3:"/"},
        {mname3: "Blog", link3:"/"},
        {mname3: "Careers", link3:"/"},
        {mname3: "AITOBI", link3:"/"},
    ];
    return(
        <>
            <footer>
                <div className="py-10 bg-gray-800">
                    <div className='container mr-auto'>
                        <div className='flex justify-between md:flex-row flex-wrap'>
                            <div className='md:w-1/4 mb-5 px-2'>
                                <div className="ft-logo"><a href='/'><img src={logo} className='block max-w-xs' /></a></div>
                                <ul className="ft-social">
                                    <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fa fa-youtube-play"></i></a></li>
                                </ul>
                            </div>
                            <div className='md:w-1/4 mb-5 px-2'>
                                <h3 className='text-1xl font-bold text-white mb-5 uppercase'>Services</h3>
                                <ul className="ft-menu">
                                    {
                                        Ftmenu1.map((ftone)=>(
                                            <li  key={Math.random()}><a href={ftone.link1} className='text-gray-500 hover:text-white block mb-1'>{ftone.mname1}</a></li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className='md:w-1/4 mb-5 px-2'>
                                <h3 className='text-1xl font-bold text-white mb-5  uppercase'>Support</h3>
                                <ul className="ft-menu">
                                    {
                                        Ftmenu2.map((fttwo)=>(
                                            <li  key={Math.random()}><a href={fttwo.link2} className='text-gray-500 hover:text-white block mb-1'>{fttwo.mname2}</a></li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className='md:w-1/4 mb-5 px-2'>
                                <h3 className='text-1xl font-bold text-white mb-5  uppercase'>EXPLORE</h3>
                                <ul className="ft-menu">
                                    {
                                        Ftmenu3.map((ftthree)=>(
                                            <li  key={Math.random()}><a href={ftthree.link3} className='text-gray-500 hover:text-white mb-1 block'>{ftthree.mname3}</a></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-black py-4">
                    <div className='container mr-auto'>
                        <div className='d-block'>
                           <p className='text-center text-white'>© <a href="https://bugendaitech.com">Bugendaitech</a>. All Rights Reserved. Designed by <a href="https://bugendaitech.com">Bugendaitech</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;