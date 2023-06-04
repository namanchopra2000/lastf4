import React from "react";
import "./comp-css/display.css"
import { useLocation } from 'react-router-dom';

const Display = () => {



    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
   
  
  const id = queryParams.get('id'); // Retrieve the imageUrl from query parameters
  const imageUrl = queryParams.get('imageUrl'); // Retrieve the imageUrl from query parameters
  const title = queryParams.get('title'); // Retrieve the title from query parameters
  const userId = queryParams.get('userId'); // Retrieve the title from query parameters
  const body = queryParams.get('body'); // Retrieve the title from query parameters


    return <div className="display">
        <h1>Details Page For Post With ID : {id}</h1>
        <img src={imageUrl} alt=""></img>
        <h2>User Id : {userId}</h2>
        <h2>Title : {title}</h2>
        <h2>Body : {body}</h2>

    </div>

}

export default Display; 