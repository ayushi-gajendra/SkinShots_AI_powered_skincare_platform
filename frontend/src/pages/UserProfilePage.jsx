import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"

import { useState, useEffect } from "react"


export default function UserProfilePage(){

    const [data, setData] = useState({})

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () =>{
        try{
            const response = await fetch("http://127.0.0.1:5000/api/data")
            const jsonData = await response.json();
            setData(jsonData)
        } catch(error){
            console.log("error", error)
        }
    }

    return(
        <>
        <main>
            {/* ----------- User Section -----------*/}  
            <div className="user-details">
                <h2>Personal Information</h2>
                <ul>Name:</ul>
                <ul>Contact:</ul>
                <ul>E-mail:</ul>
                <ul>Password:</ul>
                <ul>Address:</ul>
            </div>
            <div className="user-orders">
                <h2>Orders & Payment History</h2>
                <ul>Orders:</ul>
                <ul>Payment Info:</ul>
            </div>

        </main>
        </>
    )

}