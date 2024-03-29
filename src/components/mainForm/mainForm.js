import React, {useState} from 'react';
import './mainForm.scss';
import NotificationManager from 'react-notifications/lib/NotificationManager';
import ReactGA from "react-ga";
import PhoneInput from 'react-phone-number-input';


export default function MainForm() {
    const GOOGLE_FORM_FIRST = "entry.853751386";
    const GOOGLE_FORM_LAST = "entry.1795684837";
    const GOOGLE_FORM_EMAIL = "entry.164716149";
    const GOOGLE_FORM_TELEPHONE = "entry.814712955";
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
        ReactGA.event({
            category: 'Contact',
            action: 'Sumbit form'
        })
    }
    return(
        <div id={'form-container'}>
            <form 
                id={'main-form'} 
                className={'needs-validation'}
                onSubmit={submitForm}
                target={'hidden-iframe'}
                action={"https://docs.google.com/forms/d/e/1FAIpQLSdnoWqGE-ftcREfNOtwRPO1jOWGxb9QAiJaKOFzpI_bNuhp0g/formResponse?"}
            >
                <div className={'form-row'}>
                    <div className="form-group col-md-6">
                        <label htmlFor={"inputFirstName"}>First Name</label>
                        <input 
                            onFocus={()=>{
                                ReactGA.event({
                                    category: 'Contact',
                                    action: 'FirstName'
                                })
                            }}
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
                            onFocus={()=>{
                                ReactGA.event({
                                    category: 'Contact',
                                    action: 'LastName'
                                })
                            }} 
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
                        onFocus={()=>{
                            ReactGA.event({
                                category: 'Contact',
                                action: 'Email'
                            })
                        }}
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
                <label htmlFor={GOOGLE_FORM_TELEPHONE}>Phone Number</label>
                    <PhoneInput 
                        onFocus={()=>{
                            ReactGA.event({
                                category: 'Contact',
                                action: 'Phone Number'
                            })
                        }}
                        id={'phone-input'}
                        name={GOOGLE_FORM_TELEPHONE}
                        value={phoneNum}
                        onChange={setPhoneNum}
                        defaultCountry={"US"}
                    />
                </div> 
                <button id={'main-form-submit'} type="submit" className="btn btn-primary">Submit</button>
            </form>
            <iframe
                name={'hidden-iframe'}
                id={'hidden-iframe'}
                style={{display: 'none'}}
                onLoad={(e) => {
                    console.log(e.currentTarget.firstElementChild);
                    NotificationManager.success("Thank You, We will be in touch shortly!");
                }}
            />
        </div>
    );   
}