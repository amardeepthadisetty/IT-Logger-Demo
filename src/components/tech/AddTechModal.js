import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { addTech } from '../../reducers/actions/techActions';
import PropTypes from 'prop-types';

const AddTechModal = ({ addTech }) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const onSubmit = (e) => {
        if (firstname === '' || lastname === '') {
            M.toast({ html: 'Please enter first name and last name' })
        } else {
            console.log(firstname, lastname);
            addTech({ firstName : firstname, lastName : lastname });
            M.toast({ html: 'Technician Added' });
            //clear fields
            setFirstname('');
            setLastname('');
        }

    }
    return (
        <div id="add-tech-modal" className="modal" >
            <div className="modal-content">
                <h4>New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text"
                            name="firstname"
                            value={firstname}
                            onChange={e => setFirstname(e.target.value)} />
                        <label htmlFor="firstname" className="active">
                            First name
                           </label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input type="text"
                            name="lastname"
                            value={lastname}
                            onChange={e => setLastname(e.target.value)} />
                        <label htmlFor="lastname" className="active">
                            Last name
                           </label>
                    </div>
                </div>
                

            </div>

            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-green btn">
                    Enter
                </a>
            </div>

        </div>
    )
}

AddTechModal.propTypes = {
    addTech : PropTypes.func.isRequired
}



export default connect(null, { addTech })(AddTechModal);
