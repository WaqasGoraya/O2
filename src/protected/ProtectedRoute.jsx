import React, { useEffect, useState } from 'react'
import { Outlet , useNavigate } from 'react-router-dom'
import apiRequest from '../api/apiRequest'
const ProtectedRoute = () => {
 const [ok , setOk] = useState(false)
 const navigate = useNavigate();

          

    useEffect(()=>{
      console.log("call");
             console.log()
         if(!localStorage.getItem("token")){
            navigate("/");
         }else{
            setOk(true);
         }
        })

        return ok ? <Outlet /> : "login"

}

export default ProtectedRoute