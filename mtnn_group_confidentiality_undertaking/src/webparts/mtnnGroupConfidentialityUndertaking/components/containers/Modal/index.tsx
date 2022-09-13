import * as React from 'react';
import { Link } from 'react-router-dom';
import { BsCheckLg } from 'react-icons/bs';
import styles from './styles.module.scss';


const Modal = ({ setIsOpen }) => {
    return (
      <div className={styles.modal} onClick={ () => setIsOpen(false) }>
          <div className={styles.wrapper}>
            <div>
               <p className='check'><BsCheckLg /></p>
  
               <h1>Purchase Completed</h1>
               <small>Group Confidentiality Undertaking Form Successfully Submitted</small>
  
                <Link to='/'>Return Home</Link>
            </div>
          </div>
      </div>
    )
  }
  
  export default Modal;