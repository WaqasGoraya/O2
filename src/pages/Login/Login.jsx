import React, { useState } from "react";
import "./login.css";
import { useFormik } from "formik";
import formSchema from "../../Schema";
import apiRequest from "../../api/apiRequest";
import Taost from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Webfooter from "../website/Webfooter";
const Login = () => {
  const [loader, setLoaer] = useState(false);
  const navigate = useNavigate();

  const initialValue = {
    email: "",
    password: "",
  };
  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: initialValue,
    validationSchema: formSchema.Login,
    onSubmit: async (values) => {
      setLoaer(true);
      const response = await apiRequest("login", "POST", values);
      console.log(response);
      if (response.success) {
        Taost.success("User Login");
        setLoaer(false);
        localStorage.setItem("token", response.token);
        navigate("/dashboard");
      } else {
        Taost.error("incorrect information");
        setLoaer(false);
      }
    },
  });

  if (loader) {
    return (
      <div className="loader">
        <div className="spinner-border text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-gradient-login">
        <div className="container-login">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="card shadow-sm my-5">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="login-form">
                        <div className="logo w-100 text-center">
                          <img
                            src="logo.png"
                            alt="logo"
                            className="logo_img mb-5"
                          />
                        </div>

                        <form className="user" onSubmit={handleSubmit}>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="exampleInputEmail"
                              aria-describedby="emailHelp"
                              placeholder="Enter Email Address"
                              value={values.email}
                              onChange={handleChange}
                            />
                            <span className="text-danger">{errors.email}</span>
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              id="exampleInputPassword"
                              placeholder="Password"
                              name="password"
                              value={values.password}
                              onChange={handleChange}
                            />
                            <span className="text-danger">
                              {errors.password}
                            </span>
                          </div>

                          <div className="form-group text-center">
                            <button className="btn btn-primary  login_btn">
                              Login
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Webfooter />
    </>
  );
};

export default Login;
