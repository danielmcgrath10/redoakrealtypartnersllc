import React from 'react';
import './footer.scss';
import FB from '../../img/facebook.svg';
import Insta from '../../img/instagram.svg';

export default function Footer(props){

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

    return(
        <div id={'footer'}>
            <div id={'left'}>
                <form id={'interest-form'} className={'needs-validation'}>
                    <span id={'form-title'} className={'footer-text'}>Get In Touch</span>
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
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" required/>
                            <div className="invalid-feedback">
                                Please provide a valid City.
                            </div>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">State</label>
                            <select id="inputState" className="form-control" required>
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                            <div className="invalid-feedback">
                                Please provide a City.
                            </div>
                        </div>
                            <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip"/>
                        </div>
                    </div>
                    <button onClick={submitForm} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div id={'right'}>
                <div className={'footer-section'}>
                    <span id={'footer-title'} className={'footer-text'}>Red Oak Realty Partners LLC.</span>
                    <span className={'footer-text'}>
                        1510 Tremont St. <br/>
                        Boston, MA 02120 <br/>
                        (XXX) XXX - XXXX
                    </span>
                    <div style={{display: 'flex', flexDirection: 'row', margin: '10px'}}>
                        <a href={'https://www.facebook.com/'}><img alt={'Facebook'} src={FB} id={'fb'} /></a>
                        <a href={'https://www.instagram.com/'}><img alt={'Instagram'} src={Insta} id={'insta'}/></a>
                    </div>
                </div>
                <div className={'footer-section'}>
                    <div className={'footer-text'}>Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    <div className={'footer-text'}>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    <div className={'footer-text'}>Icons made by <a href="https://www.flaticon.com/free-icon/soil_3382647" title="ultimatearm">ultimatearm</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>
            </div>
        </div>
    )
}