import React, { useState, useRef, use } from "react";
import { useFormik } from "formik";
import * as yup from 'yup'
import Navbar from "@/Components/Layout/Navbar";
import { useAppSelector } from "@/redux/store";

const UserInput = () => {
  const [userValue, setuserValue] = useState("Adebisi");
  const [alert, setalert] = useState(false);
  const userData = useAppSelector(state=>state)
  const formik = useFormik({
    initialValues: {
        firstname: "",
        lastname: "",
        email:"",
        password:""
    },
    validationSchema: yup.object({
        firstname: yup.string().min(4, "Ode is your name less than 4 ").max(11).required(),
        email: yup.string().email().required(),
    }),
    onSubmit : (values)=>{
        console.log(values)
    }
  })


  return (
    <>
    <Navbar/>
    <h1>{userData.height}</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="mb-3 border container col-7 mx-auto shadow-sm p-3"
      >
        <h1>{userValue}</h1>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            FirstName
          </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="firstname"
            type="text"
            className="form-control"
          />
          {formik.errors.firstname && formik.touched.firstname ? (
            <small className="text-danger">{formik.errors.firstname}</small>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Lastname
          </label>
          <input
            onChange={formik.handleChange}
            name="lastname"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input
            onChange={formik.handleChange}
            name="email"
            type="email"
            className="form-control"
          />
          {formik.errors.email ? (
            <small className="text-danger">{formik.errors.email}</small>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Password
          </label>
          <input
            onChange={formik.handleChange}
            name="password"
            type="password"
            className="form-control"
          />
        </div>

        <button className="form-control btn btn-danger"> Submit</button>
      </form>
      <ul>
        <li>@reduxjs/toolkit</li>
        <li>react-redux</li>
      </ul>
    </>
  );
};

export default UserInput;
