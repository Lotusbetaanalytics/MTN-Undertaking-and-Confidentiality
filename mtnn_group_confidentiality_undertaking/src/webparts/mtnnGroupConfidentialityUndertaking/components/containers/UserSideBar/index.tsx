import * as React from 'react';
import { sp } from '@pnp/sp/presets/all';
import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { BsPencilSquare } from 'react-icons/bs';
import { MdPending } from 'react-icons/md';
import { IoMdLogOut } from 'react-icons/io';
import Logo from '../Logo';
import styles from './styles.module.scss';


const UserSideBar = ({ dashboard = '', undertaking='', pending='' }) => {
    const [username, setUsername] = React.useState('');
  
    React.useEffect(() => {
      sp.profiles.myProperties.get().then(response => {
        setUsername(response.DisplayName);
      });
    }, []);

    return(
        <div className={styles.userSidebar}>
               <div className={styles.profile}>
                    <div className={styles.logo}>
                        <Logo />
                    </div>
                    <div className={styles.dp}></div>
                    <div className={styles.name}>
                         <p>{/*{username}*/} Aishat Moshood</p>  
                    </div>
                    <p className={styles.designation}>Employee</p> 
                </div>

                <main>
                    <ul>
                        <Link to='/permanentstaff/dashboard'><li className={dashboard}><p><MdDashboard /> <span className='link'>Dashboard</span></p></li></Link>
                        <Link to='/permanentstaff/undertaking'><li className={undertaking}><p><BsPencilSquare /> <span>Undertaking Form</span></p></li></Link>
                        <Link to='/permanentstaff/pendingrequests'><li className={pending}><p><MdPending /> <span>Pending Requests</span></p></li></Link>

                        <Link to='/user/mytickets' className={styles.logout}><li><p><IoMdLogOut /> <span>Log Out</span></p></li></Link>
                    </ul>
                </main>
        </div>
    )
}

export default UserSideBar;