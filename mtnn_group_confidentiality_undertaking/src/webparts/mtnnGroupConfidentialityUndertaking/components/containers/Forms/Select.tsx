import * as React from 'react';
import { CgAsterisk } from 'react-icons/cg';

const Select = ({ value, onChange, required=true, title, size='md', children }) => {

  return (
    <div className={`inputContainer ${size}`}>
        <label className='label'>{title} <span className='asterisk'><CgAsterisk /></span></label>
        <select value={value} onChange={onChange} required={required} >
            {children}
        </select>
    </div>
  )
};

export default Select;