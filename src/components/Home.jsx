import { useState ,useEffect } from "react";
import Display from "./Display";


const Home = () => {

  let [data, setData] = useState(null);
  let [pending, setPending] = useState(true);
  let [erorr, setErorr] = useState(null);

  useEffect(() => {

      fetch("http://localhost:4000/data")
          .then((resource) => {
              if (resource.ok === false) {
                  throw Error("404 ! Error Data Not Found")
              }
              else {
                  return resource.json()
              }
          })
          .then((data) => { setData(data); setPending(false) })

          .catch((error) => { setErorr(error.message); setPending(false) })

  }, []);




  return (
    <div>
      {pending && <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>}
      { erorr && <div className="alert alert-success mt-5 text-center" role="alert">
        <h4 className="alert-heading">Well done!</h4>
        <h2>Failed To Fetch.</h2>
        <hr />
        <p className="mb-0">Check Your Internet Connection. and Try Again</p>
      </div>}
      {data && <Display data={data} />}
    </div >
  );
}

export default Home;