import React from 'react';
import appointment from "../../asset/background1.jpg"

const ContactUs = () => {
    return (
        <section className='mt-20'>
            <h1 className='text-primary text-center text-3xl'>contact us</h1>
        <div  style={{background:`url(${appointment})`,backgroundSize:'cover', backgroundRepeat: 'no-reapet', backgroundAttachment:'fixed'}} className=' mt-[150px] h-auto brightness-100 '>
            
            <h1 className='text-center brightness-100  text-3xl font-light text-white'>Stay connected with us</h1>
        <div className='py-20 text-center'>
            <input type="text" placeholder="Email Address" className="input input-bordered input-accent w-full max-w-xs" />
            <br/><br/>
            <input type="text" placeholder="Subject" className="input input-bordered input-accent w-full max-w-xs" />
            <br/><br/>
            <textarea className="textarea textarea-accent w-full max-w-xs" placeholder="Your Messege"></textarea>
            <br/><br/><br/>
            <button className="btn btn-primary font-bold text-white ">Submit</button>
        </div>
        
        </div>
        </section>
    );
};

export default ContactUs;