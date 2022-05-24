import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init"
import OrderCard from './OrderCard';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            const url = `http://localhost:5000/booking?user=${user.email}`
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setOrders(data)
                })
        }
    }, [user])

    return (
        <div>
            <h1>my order page: {orders.length} </h1>
            <div class="overflow-x-auto w-full">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>
          produt
        </th>
        <th>user name</th>
        
        <th>Price</th>
        <th>Order</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
     {
         orders.map(orde=><OrderCard
         
            key={orde._id}
            orde={orde}
         
         ></OrderCard>)
     }
     
    </tbody>
  
    
  </table>
</div>
        </div>
    );
};

export default MyOrder;