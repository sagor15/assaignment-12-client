import React from 'react';


const UserCard = ({user,isLoading,refetch,index}) => {
const {email,role} = user

    const makeAdmin = () => {
        const url = ` http://localhost:5000/user/admin/${email}`
        fetch(url,{
            method:"PUT",
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            refetch()
        })
    }
    
    return (
        <tr>
            <th>{index +1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-primary btn-sx">Make Admin</button>}</td>
            <td><button class="btn btn-success btn-sx">Delete User</button></td>
            {/* </ToastContainer> */}
        </tr>
    );
};

export default UserCard;