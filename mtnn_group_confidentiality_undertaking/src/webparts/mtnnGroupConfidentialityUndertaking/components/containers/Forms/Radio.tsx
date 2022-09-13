import * as React from 'react';
import { CgAsterisk } from 'react-icons/cg';

const Radio = ({ value, required=true, onChange, no}) => {

  return (
    <div className='radio'>
        <input type='radio' value={value} onChange={onChange} required={required} name='level'/>
        <label className='label'>Level {no}</label>
    </div>
  )
};

export default Radio;