import React from 'react';
import './AddNewUser.css'

const AddNewUser = ({getDataFromInput}) => {

    const [formVisible, setFormVisible] = React.useState(false)
    const [id, setId] = React.useState('')
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')

    const submitHandler = () => {
        getDataFromInput({id, firstName, lastName, email, phone})
    }


    return (
        <div>
            {
                !formVisible
                    ?
                    <button
                        onClick={() => setFormVisible(true)}
                        type="button"
                        className="btn btn-warning">
                        Add new user
                    </button>
                    :
                    <form className="needs-validation" noValidate onSubmit={submitHandler}>
                        <div className="form-row">
                            <div className="col-md-2 mb-3">
                                <label htmlFor="validationCustom03">ID</label>
                                <input type="number" className="form-control" id="validationCustom04" placeholder="ID"
                                       value={id}
                                       onChange={e => setId(e.target.value)}
                                       required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-3 mb-3">
                                <label htmlFor="validationCustom01">First name</label>
                                <input type="text" className="form-control" id="validationCustom01"
                                       placeholder="First name"
                                       value={firstName}
                                       onChange={e => setFirstName(e.target.value)}
                                       required/>
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="validationCustom02">Last name</label>
                                <input type="text" className="form-control" id="validationCustom02"
                                       placeholder="Last name"
                                       value={lastName}
                                       onChange={e => setLastName(e.target.value)}
                                       required/>
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="validationCustomUsername">Email</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                    </div>
                                    <input type="email" className="form-control" id="validationCustomUsername"
                                           placeholder="email"
                                           value={email}
                                           onChange={e => setEmail(e.target.value)}
                                           aria-describedby="inputGroupPrepend" required/>
                                    <div className="invalid-feedback">
                                        Please choose a @email format.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-3 mb-3">
                                <label htmlFor="validationCustom03">Phone</label>
                                <input type="tel" className="form-control" id="validationCustom03" placeholder="Phone"
                                       value={phone}
                                       onChange={e => setPhone(e.target.value)}
                                       required/>
                                <div className="invalid-feedback">
                                    Please provide a valid phone.
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary" type="submit">Submit form</button>
                    </form>
            }
        </div>

    );
};

export default AddNewUser;