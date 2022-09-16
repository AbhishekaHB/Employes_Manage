
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Addemp = () => {

    let [name, setName] = useState()
    let [date, setDate] = useState()
    let [contact, setContact] = useState()
    let [email, setEmail] = useState()
    let history=useHistory()

 
    let eventHandler=(e)=>{
        e.preventDefault();
        let data ={name,date,contact,email}

        fetch("http://localhost:4000/data",
        {
            method : "POST",
            headers :{"Content-Type":"application/json"},
            body :JSON.stringify(data)
        })
        .then(history.push("/"))

    }

    return (
        <div className="add">
            <div className="mb-3">
                
                <form  onSubmit={eventHandler}>
                <label for="exampleFormControlInput1" className="form-label">Employee Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <label for="exampleFormControlInput1" className="form-label">Employee Joing Date</label>
                <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="Joing Date" value={date} onChange={(e)=>{setDate(e.target.value)}}/>
                <label for="exampleFormControlInput1" className="form-label">Contact No</label>
                <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="0000 0000 00" value={contact}  onChange={(e)=>{setContact(e.target.value)}}/>
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>    
        </div>
    );
}

export default Addemp;