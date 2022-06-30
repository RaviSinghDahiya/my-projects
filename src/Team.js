import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

function Team(){
    let team = [
        {
            mName: 'Ravi Singh', mTitle: 'Web Designer', mImg: './images/team-member-1.jpg', fb: 'https://www.facebook.com/', insta: 'https://www.instagram.com/', linkedin: 'https://www.linkedin.com/', twitter: 'https://twitter.com/login'
        },
        {
            mName: 'Tinka', mTitle: 'SEO', mImg: './images/team-member-2.jpg', fb: 'https://www.facebook.com/', insta: 'https://www.instagram.com/', linkedin: 'https://www.linkedin.com/', twitter: 'https://twitter.com/login'
        },
        {
            mName: 'Chetan', mTitle: 'CEO', mImg: './images/team-member-3.jpg', fb: 'https://www.facebook.com/', insta: 'https://www.instagram.com/', linkedin: 'https://www.linkedin.com/', twitter: 'https://twitter.com/login'
        },
        {
            mName: 'John', mTitle: 'Developer', mImg: './images/team-member-4.jpg', fb: 'https://www.facebook.com/', insta: 'https://www.instagram.com/', linkedin: 'https://www.linkedin.com/', twitter: 'https://twitter.com/login'
        }
    ];

    return(
        <>
            <div className='py-10' id='team'>
                <div className='container m-auto'>
                    <div className='d-block mb-8'>
                        <h3 className='text-4xl font-bold text-slate-900 text-center'>Team</h3>
                    </div>
                    <div className='flex justify-between md:flex-row flex-wrap'>
                        {
                            team.map((props)=>(
                                <div className='md:w-1/4 mb-5 px-2'  key={Math.random()}>
                                    <div className='shadow-teal-200 shadow'>
                                        <img src={props.mImg} />
                                        <div className="p-3">
                                            <h3 className='mb-2 text-2xl font-bold text-slate-900'>{props.mName}</h3>
                                            <p>{props.mTitle}</p>
                                            <ul className="flex mt-3">
                                                <li className="pr-2 text-center"><a className="hover:bg-blue-500 bg-black text-white rounded-full p-2 w-8 h-8 block" target='_blank' href={props.fb}><IoLogoFacebook /></a></li>
                                                <li className="pr-2 text-center"><a className="hover:bg-blue-500 bg-black text-white rounded-full p-2 w-8 h-8 block" target='_blank' href={props.insta}><IoLogoInstagram /></a></li>                         
                                                <li className="pr-2 text-center"><a className="hover:bg-blue-500 bg-black text-white rounded-full p-2 w-8 h-8 block" target='_blank' href={props.linkedin}><IoLogoLinkedin /></a></li>
                                                <li className="pr-2 text-center"><a className="hover:bg-blue-500 bg-black text-white rounded-full p-2 w-8 h-8 block" target='_blank' href={props.twitter}><IoLogoTwitter /></a></li>
                                            </ul>
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

export default Team;