import React from "react";
import styles from "./styles.module.css";
import { Button } from "semantic-ui-react";
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
          setSubmitting(true);
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
          <div className={styles.label}>Your name:</div>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            className={styles.formItem}
          />
          <div className={styles.error}>
            {errors.name && touched.name && errors.name}{" "}
          </div>
          <div className={styles.label}>Your address:</div>
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
            className={styles.formItem}
          />
          <div className={styles.error}>
            {" "}
            {errors.address && touched.address && errors.address}
          </div>
          <div className={styles.label}>Your phone number:</div>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter your phone number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phoneNumber}
            className={styles.formItem}
          />
          <div className={styles.error}>
            {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
          </div>
          <div className={styles.button}>
            {" "}
            <Button
              type="submit"
              disabled={isSubmitting}
              color="teal"
              fluid="true"
            >
              Finish Checkout
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
}
