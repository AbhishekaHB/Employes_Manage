import { Link } from "react-router-dom";

const Navabar = () => {
    return ( 
        <div >
        <div  className="navabar ">
            <nav className="navbar navbar-dark bg-dark">
                <div className=" d-flex justify-content-sm-between container-fluid ">
                    <div className="d-flex">
                        <div>
                        <h2 className="navbar-brand"  >COMPANY LOGO</h2> 
                        </div>
                        <div>
                        <Link  to="/" className="nav-link active text-light"> Home</Link>
                        </div>
                    </div>
                    <div>
                    <Link  to="/Addemp" className="nav-link active text-light"> ADD EMPLOYEE</Link>    
                    </div>              
                </div>
            </nav>        
        </div>  
        </div> 
     );
}
 
export default Navabar;