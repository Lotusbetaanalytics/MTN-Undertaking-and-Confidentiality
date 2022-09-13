import * as React from 'react';
import Header from '../../containers/Header';
import Input from '../../containers/Forms/Input';
import Select from '../../containers/Forms/Select';
import Radio from '../../containers/Forms/Radio';
import Button from '../../containers/Button';
import { CgAsterisk } from 'react-icons/cg';

const ContractStaffUndertakingForm = () => {

    return(
        <div>
        <Header />

        <div className='inputFlex'>
            <Input type='text' value='' title={'Employee\'s Name'} onChange='' />
            <Input type='text' value='' title={'Employee\'s Email'} onChange=''/>
            <Input type='date' value='' title='Date' onChange=''/>

            <Select value='' onChange='' title='Department'>
              <option>
              </option>
              <option value='Animal'>
                  Business Solutions
              </option>
              <option value='Animal'>
                  Sales
              </option>
              <option value='Animal'>
                  Marketing
              </option>
              <option value='Animal'>
                  IT
              </option>
            </Select>  

            
            <Select value='' onChange='' title='Division'>
              <option>
              </option>
              <option value=''>
                  Division 1
              </option>
              <option value=''>
                  Division 2
              </option>
              <option value=''>
                  Division 3
              </option>
            </Select>  

            <Select value='' onChange='' title='Unit'>
              <option>
              </option>
              <option value=''>
                  Unit 1
              </option>
              <option value=''>
                  Unit 2
              </option>
              <option value=''>
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
    );
};

export default ContractStaffUndertakingForm;