import * as React from 'react'
import { Link } from 'react-router-dom';
import { sp } from '@pnp/sp/presets/all';
import { AiFillLayout, AiOutlineFileDone, AiOutlineFileSearch, AiOutlineLogout } from 'react-icons/ai';
import styles from './styles.module.scss';

const Navigation = () => {
    const [username, setUsername] = React.useState('');
    const [userImg, setUserImg] = React.useState('');

    React.useEffect(() => {
        sp.profiles.myProperties.get().then(response => {
            console.log(response)
          setUsername(response.DisplayName);
          setUserImg(response.PictureURL);
        });
      }, [])

    return (
        <div className={styles.navigation}>
            <div className={styles.userProfile}>
                <div className={styles.photo}><img src={userImg} alt='User profile picture'/></div>
                <h3>{username}</h3>
            </div>
            <div className={styles.links}>
                <ul>
                    {/* <li><Link to={`/dashboard`}><AiFillLayout /> Dashboard</Link></li>
                    <li><Link to={`/leave`}><AiOutlineFileDone />Leave</Link></li>
                    <li><Link to={`/logs`}><AiOutlineFileSearch />Logs</Link></li> */}
                </ul>
            </div>
            <div className={styles.links}>
                <ul>
                    {/* <li><Link to={`/`}><AiOutlineLogout /> Logout</Link></li> */}
                </ul>
            </div>
        </div>
    )
}

export default Navigation;