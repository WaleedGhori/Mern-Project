import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Logout = () => {
  // Promise
  const navigate = useNavigate();

  const { state, dispatch} = useContext(UserContext);

  useEffect(() => {
    fetch('/logout', {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include",
    }).then((response)=>{
      dispatch({type: 'USER', payload:false})
        navigate("/login", {replace:true})
        if (!response.status === 200) {
            const error = new Error(response.error);
            throw error;
        }
    }).catch((err)=>{
        console.log(err);
    })
  }, [])
  

  return (
    <>
    </>
  );
};

export default Logout;
