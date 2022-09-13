import * as React from 'react';
import { sp } from '@pnp/sp/presets/all';
import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { BsPencilSquare } from 'react-icons/bs';
import { MdPending } from 'react-icons/md';
import { IoMdLogOut } from 'react-icons/io';
import { BiTagAlt } from 'react-icons/bi';
import Logo from '../Logo';
import styles from './styles.module.scss';


const AdminSideBar = ({ adminDashboard = '', adminUndertaking='', adminPending='', adminReport='' }) => {
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
                    <p className={styles.designation}>Admin</p> 
                </div>

                <main>
                    <ul>
                        <Link to='/admin/dashboard'><li className={adminDashboard}><p><MdDashboard /> <span className='link'>Dashboard</span></p></li></Link>
                        <Link to='/admin/undertaking'><li className={adminUndertaking}><p><BsPencilSquare /> <span>Undertaking Form</span></p></li></Link>
                        <Link to='/admin/pendingrequests'><li className={adminPending}><p><MdPending /> <span>Pending Requests</span></p></li></Link>
                        <Link to='/admin/pendingrequests'><li className={adminReport}><p><BiTagAlt /> <span>Report Log</span></p></li></Link>

                        <Link to='/' className={styles.logout}><li><p><IoMdLogOut /> <span>Log Out</span></p></li></Link>
                    </ul>
                </main>
        </div>
    )
}

export default AdminSideBar;