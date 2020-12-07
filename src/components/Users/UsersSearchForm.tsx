import React from 'react'
import { Formik, Field, Form } from 'formik'

const UsersSearchFormValidate = (values: any) => {
  const errors = {}
  return errors
}
type UsersSearchFormObjectType = {
  term: string
}
const UsersSearchForm = () => {
  const submit = (values: UsersSearchFormObjectType, {setSubmitting}: {setSubmitting: (isSubmitting: boolean) => void}) => {
    
  }

  return <div>
    <Formik
       initialValues={{term: ''}}
       validate={UsersSearchFormValidate}
       onSubmit={submit}
     >
       {({isSubmitting}) => (
         <Form>
           <Field type='text' name='term' />
           <button type="submit" disabled={isSubmitting}>
             Find
           </button>
         </Form>
       )}
     </Formik>
  </div>
}

export default UsersSearchForm
