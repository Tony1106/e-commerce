import React from "react";
import styles from "./styles.module.css";
import { Formik } from "formik";
export default function InputCheckOut() {
  return (
    <Formik
      initialValues={{
        name: "",
        address: "",
        phoneNumber: ""
      }}
      validate={values => {
        let errors = {};
        //Validate the form here
        if (!values.name) {
          errors.name = "Please input your name";
        }
        if (!values.address) {
          errors.address = "Please input your address";
        }
        if (!values.phoneNumber) {
          errors.phoneNumber = "Please input your phone number";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            className={styles.formItem}
          />
          <div className={styles.error}>{errors.name && touched.name && errors.name} </div>
          
          <input
            type="text"
            name="address"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
            className={styles.formItem}
          />
          <div className={styles.error}> </div>{errors.address && touched.address && errors.address}
          <input
            type="text"
            name="phoneNumber"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phoneNumber}
            className={styles.formItem}
          />
          {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
}
