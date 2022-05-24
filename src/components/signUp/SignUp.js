import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import validate from "../validate/validate";
import "react-toastify/dist/ReactToastify.css";
import "./SignUp.css";

const SignUp = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  useEffect(() => {
    setErrors(validate(value,'signup'));
  }, [value]);

  const changeHandler = (e) => {
    if (e.target.name === "isAccepted") {
      setValue({ ...value, [e.target.name]: e.target.checked });
    } else {
      setValue({ ...value, [e.target.name]: e.target.value });
    }
  };
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
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <h1>Signup</h1>
        <div className="formfield">
          <label>Username</label>
          <input
            className={
              errors.name && touched.name ? "inputerror" : "inputcomplete"
            }
            type="text"
            value={value.name}
            onChange={changeHandler}
            onFocus={focusHandler}
            name="name"
          />
          {errors.name && touched.name && <span>{errors.name}</span>}
        </div>
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
        <div className="formfield">
          <label>confirm Password</label>
          <input
            className={
              errors.confirmPassword && touched.confirmPassword
                ? "inputerror"
                : "inputcomplete"
            }
            type="password"
            value={value.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
            name="confirmPassword"
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div className="formfield checkbox">
          <label>I accepted terms of privacy policy</label>
          <input
            className={
              errors.name && touched.name ? "inputerror" : "inputcomplete"
            }
            type="checkbox"
            value={value.isAccepted}
            onChange={changeHandler}
            onFocus={focusHandler}
            name="isAccepted"
          />
          {errors.isAccepted && touched.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        <div className="btns">
          <Link className="signin" to="/login">
            Login
          </Link>
          <button className="btn" type="submit">
            Sign Up
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

export default SignUp;
