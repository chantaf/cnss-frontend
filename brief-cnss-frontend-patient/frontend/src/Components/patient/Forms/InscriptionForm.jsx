import React ,{useState} from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {  useMutation } from "react-query";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";

const PatientSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(2, "Too Short!").required("Required"),
    nom: Yup.string().required("Required"),
    prenom: Yup.string().required("Required"),
    cnie: Yup.string().required("Required"),
    adresse: Yup.string().required("Required"),
    cin: Yup.string().required("Required"),
    tel: Yup.string().required("Required"),
    situationfamiliale: Yup.string().required("Required"),
    conjoint: Yup.string().required("Required"),
    nombreenfants: Yup.string().required("Required"),
    enfants: Yup.string().required("Required"),
    agence: Yup.string().required("Required"),
    ville: Yup.string().required("Required"),

});

export default function InscriptionForm() {
    
    const [cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const storeMutation = useMutation(
        (values) => 
        axios 
            .post("http://localhost:4000/api/patients/store", values)
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
                nom: "",
                prenom: "",
                cin:"",
                cnie:"",
                tel:"",
                adresse:"",
                email: "",
                password: "",
                situationfamiliale:"",
                conjoint:"",
                enfants:"",
                nombreenfants:"",
                agence:"",
                ville:""
               
            }}
        
           
            validationSchema={PatientSchema}
        
            onSubmit={async (values) => {
                storeMutation.mutate(values);
            }
        }
                
            
        >

            {({ errors, touched, values ,setFieldValue ,files,setFiles }) => (
                <Form enctype="multipart/form-data">
                    <h1 className="font-bold text-blue-600 text-xl">
                        Bienvenue dans l'espace patient Incrivez-vous maintenant    
                    </h1>
                    {/* {<Error error={errors} />} */}
                    <div className="mt-4">
                        <label
                            htmlFor="nom"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Nom
                        </label>
                        <Field
                            type="nom"
                            id="nom"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="nom"
                        />
                        {errors.nom && touched.nom ? (
                            <div className="text-red-500 font-semibold dark:text-red-400">
                                {errors.nom}
                            </div>
                        ) : null}
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="prenom"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Prenom
                        </label>
                        <Field
                            type="text"
                            id="prenom"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="prenom"
                        />
                        {errors.prenom && touched.prenom ? (
                            <div className="text-red-500 font-semibold dark:text-red-400">
                                {errors.prenom}
                            </div>
                        ) : null}
                    </div>
                   
                    <div className="mt-4">
                        <label
                            htmlFor="cin"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Cin
                        </label>
                        <Field
                            type="text"
                            id="cin"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="cin"
                        />
                        {errors.cin && touched.cin ? (
                            <div className="text-red-500 font-semibold dark:text-red-400">
                                {errors.cin}
                            </div>
                        ) : null}
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="cnie"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Cnie
                        </label>
                        <Field
                            type="text"
                            id="cnie"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="cnie"
                        />
                        {errors.cnie && touched.cnie ? (
                            <div className="text-red-500 font-semibold dark:text-red-400">
                                {errors.cnie}
                            </div>
                        ) : null}
                    </div>

                    <div className="mt-4">
                        
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="tel"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                           Tel
                        </label>
                        <Field
                            type="text"
                            id="tel"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="tel"
                        />
                        {errors.tel && touched.tel ? (
                            <div className="text-red-500 font-semibold dark:text-red-400">
                                {errors.tel}
                            </div>
                        ) : null}
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="adress"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                           Adress
                        </label>
                        <Field
                            type="text"
                            id="adress"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="adress"
                        />
                        {errors.adress && touched.adress ? (
                            <div className="text-red-500 font-semibold dark:text-red-400">
                                {errors.adress}
                            </div>
                        ) : null}
                    </div>
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
                    htmlFor="situationfamiliale"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    SituationFamiliale
                </label>
    


            <Field
                    id="situationfamiliale"
                    name="situationfamiliale"
                    as="select"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                   
                    
                    <option value="" label="Select a situationfamiliale">
                    Select a situationfamiliale{" "}
                    </option>
                    
                     <option key="célibataire"value="célibataire">
                            célibataire
                     </option>
                     <option key="marié"value="marié">
                        marié
                     </option>
                     <option key="divorce"value="divorce">
                       divorce
                     </option>
                    
               
                </Field>
            </div>

            { values.situationfamiliale != 'célibataire'  ?(
                   <>
                         <div className="mt-4">
                        <label
                            htmlFor="conjoint"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                           Conjoint
                        </label>
                        <Field
                            type="text"
                            id="conjoint"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="conjoint"
                        />
                        {errors.conjoint && touched.conjoint ? (
                            <div className="text-red-500 font-semibold dark:text-red-400">
                                {errors.conjoint}
                            </div>
                        ) : null}
                    </div>


                    <div className="mt-4">
                        <label
                            htmlFor="nombreenfants"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                           Nombre Enfants
                        </label>
                        <Field
                            type="text"
                            id="nombreenfants"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="nombreenfants"
                        />
                        {errors.nombreenfants && touched.nombreenfants ? (
                            <div className="text-red-500 font-semibold dark:text-red-400">
                                {errors.nombreenfants}
                            </div>
                        ) : null}
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="enfants"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                           Enfants
                        </label>
                        <Field
                            type="text"
                            id="enfants"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="enfants"
                        />
                        {errors.enfants && touched.enfants ? (
                            <div className="text-red-500 font-semibold dark:text-red-400">
                                {errors.enfants}
                            </div>
                        ) : null}
                    </div>
                    

                   </>

                ):null}


                    <div className="mt-4">
                        <label
                            htmlFor="agence"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                           Agence
                        </label>
                        <Field
                            type="text"
                            id="agence"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="agence"
                        />
                        {errors.agence && touched.agence ? (
                            <div className="text-red-500 font-semibold dark:text-red-400">
                                {errors.agence}
                            </div>
                        ) : null}
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="ville"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                           Ville
                        </label>
                        <Field
                            type="text"
                            id="ville"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="ville"
                        />
                        {errors.ville && touched.ville ? (
                            <div className="text-red-500 font-semibold dark:text-red-400">
                                {errors.ville}
                            </div>
                        ) : null}
                    </div>
                    <div className="mt-8 flex justify-between">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-5 text-gray-50 uppercase ml-4 md:self-start"
                        >
                            Sign in
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

