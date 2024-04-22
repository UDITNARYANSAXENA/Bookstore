import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function Logout() {
     const[authUser,setAuthUser]=useAuth()
     const handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null,
            })
            localStorage.removeItem("Users")
            toast.success("LogOut successfully")
            
            window.location.reload();
            setTimeout(()=>{
                window.location.reload();
               
            },7000)
         
        } catch (error) {
            toast.error("ERROR: "+ error)
            setTimeout(() => {
                
            },3000);
            
        }
     }
  return (
    <>
    <div>
        <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
        onClick={handleLogout}>LogOut</button>
    </div>
    </>
  )
}

export default Logout;