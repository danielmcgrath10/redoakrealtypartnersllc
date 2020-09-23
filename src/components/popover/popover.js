import React, { useEffect, useState } from 'react';
import './popover.scss';
import { Button, Popover, PopoverHeader, PopoverBody, Spinner } from 'reactstrap';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import axios from 'axios';
import BuildUrl from 'build-url';
import NotificationManager from 'react-notifications/lib/NotificationManager';

export default function ContactPopover(props){
    const GOOGLE_FORM_FIRST = "entry.703539344";
    const GOOGLE_FORM_LAST = "entry.411934632";
    const GOOGLE_FORM_EMAIL = "entry.1949602287";
    const GOOGLE_FORM_ADDRESS = "entry.1431169620";
    const GOOGLE_FORM_CITY = "entry.1515074595";
    const GOOGLE_FORM_STATE = "entry.1668296082";
    const GOOGLE_FORM_ZIP = "entry.1043463899";
    const GOOGLE_FORM_TELEPHONE = "entry.725748851";
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [phoneNum, setPhoneNum] = useState(null);

    const submitForm = async (e) => {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var form = document.getElementById('interest-form');
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
    }

    const toggle = () => {
        setPhoneNum(null);
        setPopoverOpen(!popoverOpen); 
    }

    return(
        <div>
            <Button id={'PopoverButton'} type={'button'} color={'light'}>
                Contact Us
            </Button>
            <Popover fade isOpen={popoverOpen} toggle={toggle} className={'popover-content'} placement={'top'} target={'PopoverButton'}>
                <PopoverBody className={'popover-body'}>
                    <form 
                        id={'interest-form'} 
                        className={'needs-validation'}
                        onSubmit={submitForm}
                        target={'hidden-iframe'}
                        action={"https://docs.google.com/forms/u/1/d/e/1FAIpQLSd5GEU9e2Jj_fbkfld1l1tAirl_zlk4MwpLStX9AYbL8zslWg/formResponse?"}
                    >
                        <div className={'form-row'}>
                            <div className="form-group col-md-6">
                                <label htmlFor={"inputFirstName"}>First Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id={"inputFirstName"} 
                                    name={GOOGLE_FORM_FIRST}
                                    placeholder={'John'} 
                                    required
                                />
                                <div className="invalid-feedback">
                                    Please provide a valid First Name.
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor={"inputLastName"}>Last Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id={"inputLastName"}
                                    name={GOOGLE_FORM_LAST}
                                    placeholder={'Smith'} 
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor={"inputEmail"}>Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id={"inputEmail"}
                                name={GOOGLE_FORM_EMAIL}
                                placeholder="email@email.com" 
                                required
                            />
                            <div className="invalid-feedback">
                                Please provide a valid Email Address.
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor={"inputAddress"}>Address</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id={"inputAddress"}
                                name={GOOGLE_FORM_ADDRESS}
                                placeholder="1234 Main St" 
                            />
                        </div>
                            <div className="form-group">
                                <label htmlFor={"inputCity"}>City</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id={"inputCity"}
                                    name={GOOGLE_FORM_CITY} 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor={"inputState"}>State</label>
                                <select id={"inputState"} name={GOOGLE_FORM_STATE} className="form-control">
                                    <option defaultValue>Choose...</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor={"inputZip"}>Zip</label>
                                <input type="text" className="form-control" id={"inputZip"} name={GOOGLE_FORM_ZIP} />
                            </div>
                            <div className="form-group">
                            <label htmlFor={GOOGLE_FORM_TELEPHONE}>Phone Number</label>
                                <PhoneInput 
                                    id={'phone-input'}
                                    // className={'phone-input'}
                                    name={GOOGLE_FORM_TELEPHONE}
                                    value={phoneNum}
                                    onChange={setPhoneNum}
                                    defaultCountry={"US"}
                                />
                            </div> 
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </PopoverBody>
            </Popover>
            <iframe
                name={'hidden-iframe'}
                id={'hidden-iframe'}
                style={{display: 'none'}}
                onLoad={(e) => {
                    console.log(e.currentTarget.firstElementChild);
                    toggle();
                    NotificationManager.success("Thank You, We will be in touch shortly!");
                }}
            />
        </div>
    );
}