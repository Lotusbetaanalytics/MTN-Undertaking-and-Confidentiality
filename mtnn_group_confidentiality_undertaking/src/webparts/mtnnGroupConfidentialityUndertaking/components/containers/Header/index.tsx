import * as React from 'react';
import { sp } from '@pnp/sp/presets/all';
import Logo from '../Logo';
import styles from './styles.module.scss';

const Header = () => {
  const [username, setUsername] = React.useState('');
  // const [email, setEmail] = React.useState('');

  React.useEffect(() => {
    sp.profiles.myProperties.get().then(response => {
      setUsername(response.DisplayName);
      // setEmail(response.Email);
    });
  }, []);

  return (
    <div className={styles.header}>
        <Logo /> 
        <div className={styles.title}>
            Group Confidentiality Undertaking Form
        </div>
        <div className={styles.profile}>
          <div className={styles.dp}></div>
          <div className={styles.name}>
              <p>{username}</p>  
          </div>
        </div>
    </div>
  );
};

export default Header;