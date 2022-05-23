import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ByuDetails = () => {
    const [services,setServices] = useState();
    // console.log(products);
    // const {name} = products;
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json()).then(data=>{
            console.log(data)
            // setServices(data);
        })
    },[]);

    const {Id} = useParams();
    return (
        <div className='mt-20'>
            <h1 className='text-balck'>buy Details {Id}</h1>
            <h1 className='text-balck'>buy Details {}</h1>
        </div>
    );
};

export default ByuDetails;