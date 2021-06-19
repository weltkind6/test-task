import React from 'react';
import './AddNewUser.css'

const AddNewUser = () => {

    const [formVisible, setFormVisible] = React.useState(false)


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
                    <form className="needs-validation" noValidate>
                        <div className="form-row">
                            <div className="col-md-2 mb-3">
                                <label htmlFor="validationCustom03">ID</label>
                                <input type="number" className="form-control" id="validationCustom03" placeholder="ID"
                                       required/>
                                <div className="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-3 mb-3">
                                <label htmlFor="validationCustom01">First name</label>
                                <input type="text" className="form-control" id="validationCustom01"
                                       placeholder="First name"
                                       required/>
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="validationCustom02">Last name</label>
                                <input type="text" className="form-control" id="validationCustom02"
                                       placeholder="Last name"
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
                                           aria-describedby="inputGroupPrepend" required/>
                                    <div className="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-3 mb-3">
                                <label htmlFor="validationCustom03">Phone</label>
                                <input type="tel" className="form-control" id="validationCustom03" placeholder="Phone"
                                       required/>
                                <div className="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>
                        </div>
                        {/*<div className="form-group">*/}
                        {/*    <div className="form-check">*/}
                        {/*        <input className="form-check-input" type="checkbox" value="" id="invalidCheck"*/}
                        {/*               required/>*/}
                        {/*        <label className="form-check-label" htmlFor="invalidCheck">*/}
                        {/*            Agree to terms and conditions*/}
                        {/*        </label>*/}
                        {/*        <div className="invalid-feedback">*/}
                        {/*            You must agree before submitting.*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <button className="btn btn-primary" type="submit">Submit form</button>
                    </form>
            }
        </div>

    );
};

export default AddNewUser;