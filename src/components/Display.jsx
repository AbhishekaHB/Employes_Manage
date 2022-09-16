import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Display = (data) => {

    
    let refresh=()=>{
       
        window.location.reload()
       
    }
   

    let deleteHandler=(id)=>{
            fetch(`http://localhost:4000/data/${id}`,{method : "DELETE"})
            // .then(history.push("/Addemp"))
            console.log(id);
            refresh(true)
    }

console.log(data);
    return (
            <div className="my-4">
                <table className="table table-success table-striped" >
                    <thead>
                        <tr>
                            <th scope="col">SL NO</th>
                            <th scope="col">NAME</th>
                            <th scope="col">DATE OF JOINING</th>
                            <th scope="col">CONTACT NO</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">ACTION</th>
                        </tr>
                    </thead>
                    {data && data.data.map((task) => {
                        return (
                            
                            <tbody  key={task.id}>
                                <tr>
                                    <th scope="row">{task.id}</th>
                                    <td>{task.name}</td>
                                    <td>{task.date}</td>
                                    <td>{task.contact}</td>
                                    <td>{task.email}</td>
                                    <td><button type="button" className="btn btn-danger" onClick={()=>{deleteHandler(task.id)}}>Delete</button></td>   
                                </tr>
                            </tbody>
                            
                                 )
                     })}
                </table>
            </div>
    );
}

export default Display;