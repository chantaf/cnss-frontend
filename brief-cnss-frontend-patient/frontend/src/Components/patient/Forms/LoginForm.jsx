import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import {  useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'
import axios from "axios";

const PatientSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(5, "Too Short!").required("Required"),
    cnie:Yup.string().required("Required"),
});


export default function LoginForm() {

    const [cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const loginMutation = useMutation(
        (values) => 
        axios 
            .post("http://localhost:4000/api/patients/login", values)
            .then(res=>(setCookie('role', res.data.role ),setCookie('id', res.data.id ))),
        {
          onSuccess: () => {
            navigate("/Dashboard");
          },
          onError: () => {
            setError("wrong creds");
          },
        }
      )


    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
                cnie:""
            }}

            validationSchema={PatientSchema}
            onSubmit={async (values) => {
                loginMutation.mutate(values);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <h1 className="font-bold text-blue-600 text-xl">
                        Bienvenue dans l'espace Patient authentifiez-vous
                    </h1>
                    {/* {<Error error={errors} />} */}
                    <div className="mt-4">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Email
                        </label>
                        <Field
                            type="text"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="email"
                        />
                        {errors.email && touched.email ? (
                            <div className="text-red-500 font-semibold dark:text-red-400">
                                {errors.email}
                            </div>
                        ) : null}
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Password
                        </label>
                        <Field
                            type="password"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="password"
                        />
                        {errors.password && touched.password ? (
                            <div className="text-red-500 font-semibold dark:text-red-400">
                                {errors.password}
                            </div>
                        ) : null}
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            cnie
                        </label>
                        <Field
                            type="text"
                            id="cnie"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="cnie"
                        />
                    </div>
                    <div className="mt-8 flex justify-between">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-5 text-gray-50 uppercase ml-4 md:self-start"
                        >
                            Login
                        </button>
                        <Link to="/inscription" className='text-blue-500 mt-1 underline pb-1'>Create account</Link>
                    </div>
                </Form>
            )}
        </Formik>
    )
}