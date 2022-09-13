import * as React from 'react';
import { CgAsterisk } from 'react-icons/cg';
import { FaCalendarAlt } from 'react-icons/fa';


const Input = ({ type='text', value, required=true, onChange, readOnly=false, title, size='md'}) => {

  return (
    <div className={`inputContainer ${size}`}>
        <label className='label'>{title} <span className='asterisk'><CgAsterisk /></span></label>
        <input type={type} value={value} onChange={onChange} required={required} readOnly={readOnly} />
    </div>
  )
};

export default Input;