import React, { useEffect, useState } from 'react';
import ToolsCard from './ToolsCard';

const Tools = () => {
    const [products,setProducts] = useState();

    useEffect(()=>{
        // const url = `http://localhost:5000/product`
        fetch('data.json')
        .then(res=>res.json()).then(data=>{
            setProducts(data);
        })
    },[])
    return (
       <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 '>
           {
               products?.map(product=> <ToolsCard
               key={product.id}
               product={product}
               ></ToolsCard>)
           }
       </div>
    );
};

export default Tools;