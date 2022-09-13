import * as React from 'react';
import { Link } from 'react-router-dom';
import { sp } from '@pnp/sp/presets/all';
import { IoMdArrowDropleft } from 'react-icons/io';
import { MdPlayArrow } from 'react-icons/md';
import UserSideBar from '../../containers/UserSideBar';


const PermStaffPendingRequests = () => {
    const [username, setUsername] = React.useState('');

    React.useEffect(() => {
        sp.profiles.myProperties.get().then(response => {
          setUsername(response.DisplayName);
        });
    }, []);

    return(
        <div className="wrapper">
            <UserSideBar pending='active'/>

            <div>
                <p className='header-color'></p>

                <div className='right'>
                    <div className='back'>
                        <Link to='/'>
                            <IoMdArrowDropleft className='svg'/>
                            <span>Back</span>
                        </Link>
                    </div>

                    <p>Pending Witness Requests</p>

                   <table>
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Requesters</th>
                                <th>Email</th>
                                <th>Department</th>
                                <th>Division</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Alima Kaka</td>
                                <td>alima@mtn.com</td>
                                <td>Finance</td>
                                <td>Accounting</td>
                                <td className='request-deets'><Link to='/'><span>Details</span></Link></td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>Alima Kaka</td>
                                <td>alima@mtn.com</td>
                                <td>Finance</td>
                                <td>Accounting</td>
                                <td className='request-deets'><Link to='/'><span>Details</span></Link></td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>Alima Kaka</td>
                                <td>alima@mtn.com</td>
                                <td>Finance</td>
                                <td>Accounting</td>
                                <td className='request-deets'><Link to='/'><span>Details</span></Link></td>
                            </tr>
                        </tbody>
                   </table>

                   <div className='pager'>
                        <p>
                            <span><Link to='/'>1</Link></span>
                            <span><Link to='/'>2</Link></span>
                            <span><Link to='/'>3</Link></span>
                        </p>

                        <div>
                            <span>
                                <Link to='/'><MdPlayArrow className='svg'/></Link>
                            </span>
                        </div>
                   </div>
                   
                </div>    {/*right end */}
            </div>

        </div>
    );
};

export default PermStaffPendingRequests;