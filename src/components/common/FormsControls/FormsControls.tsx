import React from 'react'
import { Field, WrappedFieldProps } from 'redux-form'
import { WrappedFieldMetaProps } from 'redux-form/lib/Field'
import { FieldValidatorType } from '../../../utils/validators/validators'
import styles from './FormsControls.module.css'

type FormControlPropsType = {
  meta: WrappedFieldMetaProps
}
const FormControl: React.FC<FormControlPropsType> = (props) => {
  const hasError = props.meta.touched && props.meta.error
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <div>
        { props.children }
      </div>
      { hasError && <span>{props.meta.error}</span> }
    </div>
  )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  const {input, meta, ...restProps} = props
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  )
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
  const {input, meta, children, ...restProps} = props
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  )
}

export function createField<FormKeysType extends string>(placeholder: string | undefined, name: FormKeysType, validators: Array<FieldValidatorType>, component: React.FC<WrappedFieldProps>, props = {}, text = '') {
  return (
    <div>
      <Field 
        placeholder={placeholder} 
        name={name}
        validate={validators}
        component={component}
        {...props}
      /> { text }
    </div>
  )
}

export type GetStringKeys<T> = Extract<keyof T, string>
