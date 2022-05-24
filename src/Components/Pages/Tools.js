import React, { useEffect, useState } from 'react';
import ToolsCard from './ToolsCard';

const Tools = () => {
    const [products,setProducts] = useState();
    // const [details , setDetails] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/product`
        fetch(url)
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
            //    setDetails={setDetails}
               ></ToolsCard>)
           }
       </div>
    );
};

export default Tools;