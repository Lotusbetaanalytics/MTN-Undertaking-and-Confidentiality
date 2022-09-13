import * as React from 'react';
import { sp } from '@pnp/sp';
import swal from 'sweetalert';
// import { PeoplePicker } from '@pnp/spfx-controls-react/lib/PeoplePicker';
import { CgAsterisk } from 'react-icons/cg';
import Input from '../../containers/Forms/Input';
import Select from '../../containers/Forms/Select';
import Radio from '../../containers/Forms/Radio';
import Button from '../../containers/Button';
import UserSideBar from '../../containers/UserSideBar';
import Modal from '../../containers/Modal';


const PermStaffUndertakingForm = () => {
    const [data, setData] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [date, setDate] = React.useState();
    const [dept, setDept] = React.useState();
    const [div, setDiv] = React.useState();
    const [unit, setUnit] = React.useState();
    const [jobTitle, setJobTitle] = React.useState();
    const [id, setId] = React.useState();
    const [jobLevel, setJobLevel] = React.useState();
    const [dateAndTimeOfSubmission, setdateAndTimeOfSubmission] = React.useState();
    const [witnessName, setWitnessName] = React.useState();
    const [witnessEmail, setWitnessEmail] = React.useState();

    React.useEffect(() => {
        sp.web.lists
        .getByTitle('PermanentStaff_List')
        .items.get()
        .then((res) => {
            setData(res);
        })
    },[]);

    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true);

        sp.web.lists.getByTitle('PermanentStaff_List').items.add({
            Employee_Name: name,
            Employee_Email: email,
            Date: date,
            Department: dept,
            Division: div,
            Unit: unit,
            Job_Title: jobTitle,
            Job_level: jobLevel,
            Time_of_Submission: dateAndTimeOfSubmission,
            Witness_Name: witnessName,
            Witness_Email: witnessEmail
        }).then((res) => {
            setOpen(false);
            swal('Success', 'Group Confidentiality Undertaking Form Successfully Submitted', 'success')
            sp.web.lists
            .getByTitle('PermanentStaff_List')
            .items.get()
            .then((res) => {
                setData(res)
            });
            setLoading(false);
        })
        .catch((e) => {
            swal('Warning', 'An Error occured, Try Again!', 'error');
            console.error(e);
        });
    };
    
    return(
        <>
            <div className="wrapper">
                <UserSideBar undertaking='active'/>
                
                <div>
                    <p className="header-color"></p>

                    <h5>Group Confidentiality Undertaking</h5>
                    
                    <div className='inputFlex'>
                        <form onSubmit={submitHandler}>
                            <Input type='text' value='name' title={'Employee\'s Name'} onChange='' />

                            {/* <PeoplePicker context={this.props.context} ensureUser={true} personSelectionLimit={1} groupName={''} showtooltip={true} disabled={false} showHiddenInUI={false} resolveDelay={1000}></PeoplePicker> */}

                            <Input type='text' value='email' title={'Employee\'s Email'} onChange=''/>
                            <Input type='date' value='date' title='Date' onChange=''/>

                            <Select value='dept' onChange='' title='Department'>
                            <option>
                            </option>
                            <option value='businessSolutions'>
                                Business Solutions
                            </option>
                            <option value='sales'>
                                Sales
                            </option>
                            <option value='marketing'>
                                Marketing
                            </option>
                            <option value='it'>
                                IT
                            </option>
                            </Select>  

                            <Select value='div' onChange='' title='Division'>
                            <option>
                            </option>
                            <option value='division1'>
                                Division 1
                            </option>
                            <option value='division2'>
                                Division 2
                            </option>
                            <option value='division3'>
                                Division 3
                            </option>
                            </Select>  

                            <Select value='unit' onChange='' title='Unit'>
                            <option>
                            </option>
                            <option value='unit1'>
                                Unit 1
                            </option>
                            <option value='unit2'>
                                Unit 2
                            </option>
                            <option value='unit3'>
                                Unit 3
                            </option>
                            </Select>

                            <section className='radio-section md'>
                            <label className='label'>Job Level <span className='asterisk'><CgAsterisk /></span></label>
                            <div className='radioContainer'>
                                <Radio value='lvl1' onChange='' no='1' />
                                <Radio value='lvl2' onChange='' no='2' />
                                <Radio value='lvl3' onChange='' no='3' /> 
                                <Radio value='lvl4' onChange='' no='4' />
                            </div>
                            </section>

                            <Input type='text' value='dateAndTimeOfSubmission' title='Time of Report Submission' onChange=''/>
                            <Input type='text' value='witnessName' title={'Witness\' Name'} onChange=''/>
                            <Input type='text' value='witnessEmail' title={'Witness\' Email'} onChange=''/>

                            <div className='radio lg'>
                            <input type='checkbox' value='' name='agreecheck' id='agreecheck' required/>
                            <label className='label' htmlFor='agreecheck'>I have read and agree to abide by the Terms and Conditions of the MTN Group Confidentiality Undertaking</label>
                            </div>

                            <Button text='Submit' bg='disabledBtn'/>
                        </form>
                    </div>

                </div>
                
            </div>

        </>
    );
};

export default PermStaffUndertakingForm;