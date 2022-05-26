import React from 'react';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';


const UserCard = ({user,isLoading,refetch,index}) => {
const {email,role} = user
if(isLoading){
    return <Loading></Loading>
}
const handleDelete= email =>{
    // const url = `https://guarded-sea-37024.herokuapp.com/user/${email}`
    // fetch(url,{
    //     method:'DELETE',
    // }).then(res=>res.json())
    // .then(data=>{
    //     console.log(data);
    //     if(data.deletedCount){
    //         toast(` is deleted successfully`);
    //         refetch();
    //     }
    // })
}
    const makeAdmin = () => {
        const url = ` https://guarded-sea-37024.herokuapp.com/user/admin/${email}`
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
            <td><button onClick={()=> handleDelete(email)} class="btn btn-success btn-sx">Delete User</button></td>
            {/* </ToastContainer> */}
        </tr>
    );
};

export default UserCard;