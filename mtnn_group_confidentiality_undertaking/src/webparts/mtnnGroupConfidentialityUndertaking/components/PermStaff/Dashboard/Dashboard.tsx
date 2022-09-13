import * as React from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import { MdPending } from 'react-icons/md';
import { sp } from '@pnp/sp/presets/all';
import UserSideBar from '../../containers/UserSideBar';
import Card from '../../containers/Card';


const PermStaffDashboard = () => {
    const [username, setUsername] = React.useState('');

    React.useEffect(() => {
        sp.profiles.myProperties.get().then(response => {
          setUsername(response.DisplayName);
        });
    }, []);

    return(
        <div className="wrapper">
            <UserSideBar dashboard='active'/>

            <div>
                <p className='header-color'></p>

                <div className='right'>
                    <div>
                        <p>Hello!</p>
                        <p className='name'>{/*{username}*/} Aishat Moshood</p> 
                    </div>

                    <div className='card-wrapper'>
                        <Card Icon={BsPencilSquare} title='Undertaking Form' link='/permanentstaff/undertaking/form'/>
                        <Card Icon={MdPending} title='Pending Request' link='/permanentstaff/pendingrequests' />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PermStaffDashboard;