import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const OrderCard = ({orde}) => {
    const {product,image,userName,prices,order,_id} = orde;
 
    return (
        <tr>
        
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">{product}</div>
              
            </div>
          </div>
        </td>
        <td>
          {userName}
          
        </td>
        <td>{prices}tk</td>
        <td>{order}ps</td>
        <th>
          <button  class="btn btn-primary btn-sx">Delete</button>
          
        </th>
        <th>
        {
          prices && <Link to={`/dashboard/payment/${_id}`}><button class="btn btn-success btn-sx ">Pay</button></Link>
        }
        </th>
      </tr>
    );
};

export default OrderCard;