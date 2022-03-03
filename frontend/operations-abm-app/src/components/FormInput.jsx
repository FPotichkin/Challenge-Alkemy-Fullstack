import React from 'react'
import PropTypes from 'prop-types'

const FormInput = ({type, name, placeholder}) => {
  return (
    <input type={type} name={name} className='text-white bg-cyan-900 outline-none tracking-wide w-11/12 mx-auto py-2 placeholder:text-slate-300 rounded indent-2 focus:ring-slate-300 focus:ring-2' placeholder={placeholder}/>
  )
}

FormInput.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string
}

export default FormInput