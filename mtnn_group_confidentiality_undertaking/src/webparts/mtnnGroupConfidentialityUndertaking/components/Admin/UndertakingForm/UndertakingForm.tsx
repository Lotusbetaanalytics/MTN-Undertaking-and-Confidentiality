import * as React from 'react';
import { sp } from "@pnp/sp/presets/all"; 
import { CgAsterisk } from 'react-icons/cg';
import Input from '../../containers/Forms/Input';
import Select from '../../containers/Forms/Select';
import Radio from '../../containers/Forms/Radio';
import Button from '../../containers/Button';
import AdminSideBar from '../../containers/AdminSideBar';


const AdminUndertakingForm = () => {
    (async () => {  
  
        const list = "PermanentStaff_List";  
        
        /** Get all list items */  
        const listItems = await sp.web.lists.getByTitle(list).items.get();  
        console.table(listItems);  
        
      })().catch(console.log)  
    return(
        <div className="wrapper">
            <AdminSideBar adminUndertaking='active'/>
            
            <div>
                <p className="header-color"></p>

                <h4>Group Confidentiality Undertaking Form</h4>

                <div className='inputFlex'>

                    <Input type='text' value='name' title={'Employee\'s Name'} onChange='' />
                    <Input type='text' value='email' title={'Employee\'s Email'} onChange=''/>
                    <Input type='date' value='date' title='Date' onChange=''/>

                    <Select value='' onChange='' title='Department'>
                    <option>
                    </option>
                    <option value='businessSolutions'>
                        Business Solutions
                    </option>
                    <option value='Sales'>
                        Sales
                    </option>
                    <option value='Marketing'>
                        Marketing
                    </option>
                    <option value='IT'>
                        IT
                    </option>
                    </Select>  

                    
                    <Select value='' onChange='' title='Division'>
                    <option>
                    </option>
                    <option value='Div1'>
                        Division 1
                    </option>
                    <option value='zDiv2'>
                        Division 2
                    </option>
                    <option value='Div3'>
                        Division 3
                    </option>
                    </Select>  

                    <Select value='' onChange='' title='Unit'>
                    <option>
                    </option>
                    <option value='Unit1'>
                        Unit 1
                    </option>
                    <option value='Unit2'>
                        Unit 2
                    </option>
                    <option value='Unit3'>
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

                    <Input type='time' value='' title='Time of Report Submission' onChange=''/>
                    <Input type='text' value='' title={'Witness\' Name'} onChange=''/>
                    <Input type='text' value='' title={'Witness\' Email'} onChange=''/>

                    <div className='radio lg'>
                    <input type='checkbox' value='' name='agreecheck' id='agreecheck' required/>
                    <label className='label' htmlFor='agreecheck'>I have read and agree to abide by the Terms and Conditions of the MTN Group Confidentiality Undertaking</label>
                    </div>

                
                    <Button text='Submit' bg='disabledBtn'/>
                </div>
            </div>
            
        </div>
    );
};

export default AdminUndertakingForm;