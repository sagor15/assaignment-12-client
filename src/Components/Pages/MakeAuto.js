import React from 'react';
import Appointment from "../../asset/background1.jpg"
import auto from "../../asset/banjo-emerson-mathew-vIyrpeNLz_A-unsplash-removebg-preview (1).png"

const MakeAuto = () => {
    return (
        <section style={{background:`url(${Appointment})` ,backgroundSize:'cover', backgroundRepeat: 'no-reapet', backgroundAttachment:'fixed'}} className='flex mt-[150px] justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={auto} />
            </div>
            <div className='flex-1 px-5'>
                <h1 className='text-white text-xl text-primary'>Appointment</h1>
                <h2 className='text-white text-3xl text-bold'>Make an appointment Today</h2>
                <p className='text-white '>It is a long established fact that a reader will be distracted by the readable content
                    of a page when looking at its layout. The point of using Lorem Ipsumis that it has a
                    more-or-less normal distribution of letters,as opposed to using 'Content here, content
                    here', making it look like readable English. Many desktop publishing packages and web
                    page</p>
            </div>
        </section>
    );
};

export default MakeAuto;