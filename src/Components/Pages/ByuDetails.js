import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import DetailsCard from './DetailsCard';

const ByuDetails = () => {
    const { Id } = useParams();
    const [services, setServices] = useState({});
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const [user] = useAuthState(auth);
    // console.log(user);
    // const {_id,name} = services;
    const { _id, name, price, description, img, minimumQuantity, availableProduct } = services;

    useEffect(() => {
        const url = `http://localhost:5000/product/${Id}`;
        fetch(url)
            .then(res => res.json()).then(data => {
                setServices(data);
            })
    }, [Id, setServices]);



    
    const [error, setError ] = useState('');
  
    const handleBuy = e => {
        e.preventDefault();
      
        const minimum = e?.target?.minimums?.value;
        const order = e?.target?.order?.value;
        console.log(error);
        if(minimum >= order){
            return setError('you have should lower from minimum');
        }else{
            console.log(minimum, order);
        const booking = {
            treatmentId: _id,
            product: name,
            image:img,
            prices:price,
            user: user.email,
            userName: user.displayName,
            availableProducts:availableProduct,
            address: e?.target?.address?.value,
            phone: e?.target?.phone?.value,
            order:e?.target?.order?.value,
        }
        fetch('http://localhost:5000/booking',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
            
        })
        .then(res=>res.json()).then(data=>{
            console.log(data);
        })
        }
        
        toast('you have successfully purchase');
        
    }
    


    return (
        <div className='mt-20'>
            <div class="card w-96 bg-base-100 shadow-xl m-auto">
                <h1 className='text-balck text-center'>Product Details </h1>
                <figure><img src={services.img} alt="Shoes" /></figure>
                <div class="card-body ">
                <form onSubmit={handleBuy} className='grid grid-cols-1 gap-4 justify-items-center'>
                        <h3 className="font-bold text-lg text-center text-secondary">Booking for : {name}</h3>
                        <input type="text" value={name} disabled  className="input input-bordered w-full max-w-xs" />
                        <input type="number" placeholder='Phone Number' required   className="input input-bordered w-full max-w-xs" />
                        <input type="email"  name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='adress' placeholder='Adress' required className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='price' value={price} disabled className="input input-bordered w-full max-w-xs" />
                        minimum Quantity
                        <input type="number" value={minimumQuantity} name='minimums' className="input input-bordered w-full max-w-xs" />
                        Order Quantity
                        <input type="number"  name='order' className="input input-bordered w-full max-w-xs" />
                        <h5 className='text-red-500'>{error}</h5>
                       {
                           error ?  <input type="submit" value="Submit" disabled className="btn btn-secondary w-full max-w-xs" />: <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs" />
                       }
                            
                    </form>


                   
                   
                </div>
            </div>


            <ToastContainer />
        </div>
    );
};

export default ByuDetails;