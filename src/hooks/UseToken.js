// import {useEffect, useState} from "react";



// const UseToken = user =>{
//     const [token , setToken] = useState('');
//     useEffect(()=>{
//         // console.log('usetoken data' , user);
//         const email = user?.user?.email;
//         const currentUser = {email: email};
//         if(email){
//             const url = `https://guarded-sea-37024.herokuapp.com/user/${email}`
//             fetch(url,{
//                 method:'PUT',
//                 headers:{
//                     "content-type":"application/json"
//                 },
//                 body:JSON.stringify(currentUser)
//             })
//             .then(res=>res.json())
//             .then(data=>{
//                 console.log('data add usetoken ', data);
//                 const accessToken = data.token;
//                 localStorage.setItem('accessToken',accessToken);
//                 setToken(accessToken);
//             })
//         }
//     },[user]);
//     return [token];


// }

// export default UseToken;