import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import validate from "../validate/validate";
import "react-toastify/dist/ReactToastify.css";
import "../signUp/SignUp.css";


const Login = () => {
    const [value, setValue] = useState({
      email: "",
      password: "",
    });
  
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    useEffect(() => {
      setErrors(validate(value,'login'));
    }, [value]);
  
    const changeHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
      }
    
    const focusHandler = (e) => {
      setTouched({ ...touched, [e.target.name]: true });
    };
  
    const submitHandler = (e) => {
      e.preventDefault();
      if (!Object.keys(errors).length) {
        toast.success(' form compleeted successfully!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      } else {
        toast.error('there are some errors!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        setTouched({
          email: true,
          password: true,
        });
      }
    };
  
    return (
      <div className="container">
        <form onSubmit={submitHandler}>
          <h1>Login</h1>
          
          <div className="formfield">
            <label>Email</label>
            <input
              className={
                errors.email && touched.email ? "inputerror" : "inputcomplete"
              }
              type="text"
              value={value.email}
              onChange={changeHandler}
              onFocus={focusHandler}
              name="email"
            />
            {errors.email && touched.email && <span>{errors.email}</span>}
          </div>
          <div className="formfield">
            <label>Password</label>
            <input
              className={
                errors.password && touched.password
                  ? "inputerror"
                  : "inputcomplete"
              }
              type="password"
              value={value.password}
              onChange={changeHandler}
              onFocus={focusHandler}
              name="password"
            />
            {errors.password && touched.password && (
              <span>{errors.password}</span>
            )}
          </div>
          
          <div className="btns">
            <Link className="signin" to="/signup">
              Sign Up
            </Link>
            <button className="btn" type="submit">
              login
            </button>
          </div>
        </form>
        <ToastContainer
          theme="colored"
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  };
  
  export default Login;
  