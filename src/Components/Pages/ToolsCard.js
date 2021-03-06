import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToolsCard = ({ product,setDetails }) => {
    const {_id, name, price, description, img, minimumQuantity, availableProduct } = product;
    const navigate = useNavigate();
    
    const navigateToBuyDetails = id =>{
        navigate(`/tools/${id}`);
    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl image-full mt-10 gap-20 container">
            <figure className='brightness-200'><img  src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class=" text-center text-orange">{name}</h2>
                <p>{description}</p>
               <div>
                   <span>description:{description}</span><br></br>
                   <span>price:{price}tk</span><br></br>
                   <span>minimum order Quantity: {minimumQuantity}ps</span><br></br>
                   <span>available Product: {minimumQuantity}ps</span>
               </div>
                <div class="card-actions justify-end">
                    <button onClick={()=> navigateToBuyDetails(_id)} class="btn btn-primary transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:btn-indigo duration-300 ">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ToolsCard;