import { useEffect, useState } from "react"


const UseAdmin = user =>{
 const [admin , setAdmin] = useState(false);
 const [adminLogin , setAdminLogin] = useState(true)
 useEffect(()=>{
    const email = user?.email;
    if(email){
        const url = ` http://localhost:5000/admin/${email}`
        fetch(url,{
            method:"GET",
            headers:{
                "content-type":"application/json",
            }
        })
        .then(res=>res.json())
        .then(data=>{
           setAdmin(data.admin)
           setAdminLogin(false)
        })
    }
 },[user])
 return [admin,adminLogin]
}

export default UseAdmin;