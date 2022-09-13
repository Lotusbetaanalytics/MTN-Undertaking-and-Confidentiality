import * as React from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import { MdPending } from 'react-icons/md';
import { BiTagAlt } from 'react-icons/bi';
import { sp } from '@pnp/sp/presets/all';
import AdminSideBar from '../../containers/AdminSideBar';
import Card from '../../containers/Card';


const AdminDashboard = () => {
    const [username, setUsername] = React.useState('');

    React.useEffect(() => {
        sp.profiles.myProperties.get().then(response => {
          setUsername(response.DisplayName);
        });
    }, []);

    return(
        <div className="wrapper">
            <AdminSideBar adminDashboard='active'/>

            <div>
                <p className='header-color'></p>

                <div className='right'>
                    <div>
                        <p>Hello!</p>
                        <p className='name'>{/*{username}*/} Aishat Moshood</p> 
                    </div>

                    <div className='card-wrapper-admin'>
                        <Card Icon={BsPencilSquare} title='Undertaking Form' link='/admin/undertaking/form'/>
                        <Card Icon={MdPending} title='Pending Request' link='/admin/pendingrequests' />
                        <Card Icon={BiTagAlt} title='Report Log' link='/admin/reports' />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminDashboard;