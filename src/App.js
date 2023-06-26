import React from 'react'
import { Formik } from 'formik'
import './App.css';

function App() {
  return (
   <>
    <Formik
      initialValues={{phone:''}}

      validate={values=>{
        const errors = {}
         if (!values.phone) {
           errors.phone = 'Required';
         }else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
          errors.phone = 'invalid';
         }
         return errors
      }}
      onSubmit={()=>{}}
    >
      {({values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting, })=>(
        <form onSubmit={handleSubmit}>

          <input
          type='text'
          name='phone'
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          />

          <div>{errors.phone}</div>

          <button type="submit" disabled={isSubmitting}>
            مرحله بعد
          </button>

        </form>
  )}
    </Formik>
   </>
  );
}

export default App;
