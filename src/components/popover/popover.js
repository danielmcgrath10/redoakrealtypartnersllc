import React, { useState } from 'react';
import './popover.scss';
import { Button, Popover, PopoverHeader, PopoverBody, Spinner } from 'reactstrap';

export default function ContactPopover(props){

    const [popoverOpen, setPopoverOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const submitForm = (e) => {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                event.preventDefault();
                event.stopPropagation();
                form.classList.add('was-validated');

                console.log(form.inputFirstName.value);
            }, false);
        });
    }

    const toggle = () => {
        setPopoverOpen(!popoverOpen);
    }

    return(
        <div>
            <Button id={'PopoverButton'} type={'button'} color={'light'}>
                Contact Us
            </Button>
            <Popover fade isOpen={popoverOpen} toggle={toggle} className={'popover-content'} placement={'top-start'} target={'PopoverButton'}>
                <PopoverBody className={'popover-body'}>
                    {
                        loading ? 
                            <div id={'contact-form-spinner'}>
                                <Spinner color={'primary'}/>
                            </div>
                        : 
                            submitted ?
                                <div id={'contact-form-feedback'}>
                                    We Look Forward to Speaking With You
                                </div>
                            :
                                <form id={'interest-form'} className={'needs-validation'}>
                                    <div className={'form-row'}>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputFirstName">First Name</label>
                                            <input type="text" className="form-control" id="inputFirstName" placeholder={'John'} required/>
                                            <div className="invalid-feedback">
                                                Please provide a valid First Name.
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputLastName">Last Name</label>
                                            <input type="text" className="form-control" id="inputLastName" placeholder={'Smith'} required/>
                                            <div className="invalid-feedback">
                                                Please provide a valid Last Name.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputEmail">Email</label>
                                        <input type="email" className="form-control" id="inputEmail" placeholder="xxx@xxx.xxx" required/>
                                        <div className="invalid-feedback">
                                            Please provide a valid Email Address.
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputAddress">Address</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required/>
                                        <div className="invalid-feedback">
                                            Please provide an Address.
                                        </div>
                                    </div>
                                        <div className="form-group">
                                            <label htmlFor="inputCity">City</label>
                                            <input type="text" className="form-control" id="inputCity" required/>
                                            <div className="invalid-feedback">
                                                Please provide a valid City.
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputState">State</label>
                                            <select id="inputState" className="form-control" required>
                                                <option selected>Choose...</option>
                                                <option>...</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please provide a City.
                                            </div>
                                        </div>
                                            <div className="form-group">
                                            <label htmlFor="inputZip">Zip</label>
                                            <input type="text" className="form-control" id="inputZip"/>
                                        </div>
                                    <button onClick={submitForm} type="submit" className="btn btn-primary">Submit</button>
                                </form>

                    }
                    
                </PopoverBody>
            </Popover>
        </div>
    );
}