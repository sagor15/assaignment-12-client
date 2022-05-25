import React from 'react';

const OrderCard = ({orde}) => {
    const {product,image,userName,prices,order} = orde;
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
          <button class="btn btn-primary btn-sx">Delete</button>
          
        </th>
        <th>
        <button class="btn btn-secondary btn-sx ">Pay</button>
        </th>
      </tr>
    );
};

export default OrderCard;