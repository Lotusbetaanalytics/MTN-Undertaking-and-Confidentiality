import * as React from 'react';
import { Link } from 'react-router-dom';
import { sp } from '@pnp/sp/presets/all';
import { IoMdArrowDropleft } from 'react-icons/io';
import { CgAsterisk } from 'react-icons/cg';
import UserSideBar from '../../containers/UserSideBar';


const PermStaffPendingRequestsDetails = () => {
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

                    <p>Details</p>

                    <div className='details-flex'> {/* Pending requests details */}
                      <section>
                        <p>Employee's Name</p>
                        <p>Aishat Moshood</p>
                      </section>
                      
                      <section>
                        <p>Employee's Email</p>
                        <p>aishat@lotusbetaanalytics.com</p>
                      </section>
                   </div>

                   <div className='details-flex'>
                      <section>
                        <p>Date</p>
                        <p>08/08/2022</p>
                      </section>
                      
                      <section>
                        <p>Department</p>
                        <p>Finance</p>
                      </section>
                   </div>

                   <div className='details-flex'>
                      <section>
                        <p>Division</p>
                        <p>Accounting</p>
                      </section>
                      
                      <section>
                        <p>Unit</p>
                        <p>Unit 1</p>
                      </section>
                   </div>

                   <div className='details-flex'>
                      <section>
                        <p>Job Title</p>
                        <p>Accountant</p>
                      </section>
                      
                      <section>
                        <p>HNC ID</p>
                        <p>122333</p>
                      </section>
                   </div>

                   <div className='details-flex'>
                      <section>
                        <p>Job Level <span className='asterisk'><CgAsterisk /></span></p>
                        <p>Level 1 </p>
                      </section>
                      
                      <section>
                        <p>Date and Time of Submission of Report <span className='asterisk'><CgAsterisk /></span></p>
                        <p>08/08/2022</p>
                      </section>
                   </div>

                   <div className='details-flex'>
                      <section>
                        <p>Witness Name</p>
                        <p>Pelumi Adisa</p>
                      </section>
                      
                      <section>
                        <p>Witness Email</p>
                        <p>pelumi@lotus.com</p>
                      </section>
                   </div>  {/* Pending requests details end */}

                   <div>
                        <button className='btn-accept'>Accept</button>
                        <button className='btn-accept btn-reject'>Reject</button>
                   </div>
                   
                </div>    {/*right end */}
            </div>

        </div>
    );
};

export default PermStaffPendingRequestsDetails;