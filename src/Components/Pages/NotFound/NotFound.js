import React from 'react';
import notFound from "../../../asset/notFound.png";

const NotFound = () => {
    return (
        <div className='pt-15'>
            <img className='w-full' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;