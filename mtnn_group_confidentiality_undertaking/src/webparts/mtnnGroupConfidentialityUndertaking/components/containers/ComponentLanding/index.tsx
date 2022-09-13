import * as React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import styles from './styles.module.scss';
import {AiOutlineArrowRight} from 'react-icons/ai';

const ComponentLanding = ({undertaking}) => {
  return (
    <div className={styles.componentLanding}>
        <div>
            <p className={styles.myLogo}><Logo /></p>
            <p className={styles.welcome}>Welcome to</p>
            <p className={styles.grp}>Group Confidentiality Undertaking</p>
            <p className={styles.proceed}><Link to={undertaking} className='btn blue'>Proceed <span><AiOutlineArrowRight /></span></Link></p>
        </div>
    </div>
  )
}

export default ComponentLanding;