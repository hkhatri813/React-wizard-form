import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form';
import validate from '../validation/validation';
import { FormInput, FormSelectList, FormDatePicker } from '../FormInput';
import { mobile, captialize } from '../validation/normalize/index.js';
import { Button, Card, CardBody, Col, FormGroup } from 'reactstrap';

let StepTwoForm = (props) => {

  const { handleSubmit, pristine, previousPage, submitting, data, userType, hasAdminControl } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Col xs="12" sm="12">
        <Card className="card-border">
          <CardBody>

            {/* For Account Type Veternarian Master Account */}

            {data && data.value === 0 &&
              <>
                <FormGroup row>
                  <Col xs="12" lg="6">
                    <Field
                      name="title"
                      type="text"
                      component={FormInput}
                      label="Title"
                      inputPlaceHolder="Enter title"
                      normalize={captialize}
                    />
                  </Col>
                  <Col xs="12" lg="6">
                    <Field
                      name="businessName"
                      type="text"
                      component={FormInput}
                      label="Business/Clinic name "
                      inputPlaceHolder="Enter name"
                      normalize={captialize}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row className="my-0">
                  <Col xs="12" lg="6">
                    <Field
                      name="phone"
                      type="text"
                      component={FormInput}
                      label="Main Phone No. *"
                      inputPlaceHolder="Enter phone No"
                      normalize={mobile}
                    />
                  </Col>
                  <Col xs="12" lg="6">
                    <Field
                      name="zip"
                      type="number"
                      component={FormInput}
                      label="Zip"
                      inputPlaceHolder="Enter Zip"
                    />
                  </Col>
                </FormGroup>
                <br />
                <FormGroup row>
                  <Col xs="12" lg="6">
                    <Field
                      name="streetAdd1"
                      type="text"
                      component={FormInput}
                      label="Street Address 1"
                      inputPlaceHolder="Enter address"
                    />
                  </Col>
                  <Col xs="12" lg="6">
                    <Field
                      name="streetAdd2"
                      type="text"
                      component={FormInput}
                      label="Street Address 2"
                      inputPlaceHolder="Enter address"
                    />
                  </Col>
                  <Col xs="12" lg="6">
                    <Field
                      name="city"
                      type="text"
                      component={FormInput}
                      label="City"
                      inputPlaceHolder="Enter city name"
                    />
                  </Col>
                  <Col xs="12" lg="6">
                    <Field
                      name="state"
                      type="text"
                      component={FormInput}
                      label="State"
                      inputPlaceHolder="Enter state name"
                    />
                  </Col>
                  <Col xs="12" lg="6">
                    <Field
                      name="stateLic"
                      type="text"
                      component={FormInput}
                      label="State License (State)"
                      inputPlaceHolder="Enter state license"
                    />
                  </Col>
                  <Col xs="12" lg="6">
                    <Field
                      name="dea"
                      type="text"
                      component={FormInput}
                      label="DEA # (If ordering Controlled Substances)"
                    />
                  </Col>
                  <Col>
                    <Field
                      name="adminControl"
                      component={FormSelectList}
                      label="Will Any Controls be Administered In‐Clinic?"
                      data={['Yes', 'No']} />
                  </Col>
                </FormGroup>
                {
                  hasAdminControl === 'Yes' &&
                  <FormGroup row>
                    <Col xs="12" lg="6">
                      <Field
                        name="vetDriverLic"
                        type="text"
                        component={FormInput}
                        label="Veterinarian’s Driver’s License"
                        inputPlaceHolder="Enter Veterinarian’s Driver’s License"
                      />
                    </Col>
                    <Col xs="12" lg="6">
                      <Field
                        name="DL"
                        type="text"
                        component={FormInput}
                        label="Driver’s License State"
                        inputPlaceHolder="Enter Driver’s License State"
                      />
                    </Col>
                    <Col xs="12" lg="6">
                      <Field
                        name="vetDOB"
                        component={FormDatePicker}
                        label="Veterinarian’s DOB"
                        inputPlaceHolder="Enter Veterinarian’s DOB"
                      />
                    </Col>
                  </FormGroup>
                }
                <FormGroup row>

                </FormGroup>
              </>
            }

            {/* For Account Type Veternarian Personell Linked to Master Veternarian Account */}

            {data && data.value === 1 &&
              <>
                <FormGroup row>
                  <Col>
                    <Field
                      name="emailMas"
                      type="email"
                      component={FormInput}
                      label="Email of account master *"
                      inputPlaceHolder="Enter Email"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col>
                    <Field
                      name="firstNameVetPer"
                      type="text"
                      component={FormInput}
                      label="First Name"
                      inputPlaceHolder="Enter First Name"
                      normalize={captialize}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col>
                    <Field
                      name="lastNameVetPer"
                      type="text"
                      component={FormInput}
                      label="Last Name"
                      inputPlaceHolder="Enter Last Name"
                      normalize={captialize}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col>
                    <Field
                      name="title"
                      type="text"
                      component={FormInput}
                      label="Title"
                      inputPlaceHolder="Enter title"
                      normalize={captialize}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col>
                    <Field
                      name="userType"
                      component={FormSelectList}
                      label="User Type"
                      data={['Office Admin', 'Technician', 'Veterinarian']} />
                  </Col>
                </FormGroup>
                {userType === 'Technician' &&
                  < FormGroup row>
                    <Col>
                      <Field
                        name="techLic"
                        type="text"
                        component={FormInput}
                        label="Techincian License"
                        inputPlaceHolder="Enter techincian license"
                      />
                    </Col>
                    <Col xs="12" lg="6">
                      <Field
                        name="stateLic"
                        type="text"
                        component={FormInput}
                        label="State License"
                        inputPlaceHolder="Enter state license"
                      />
                    </Col>
                  </FormGroup>
                }
                {userType === 'Veterinarian' &&
                  <>
                    < FormGroup row>
                      <Col>
                        <Field
                          name="vetLic"
                          type="text"
                          component={FormInput}
                          label="Veterinarian License"
                          inputPlaceHolder="Enter veterinarian license"
                        />
                      </Col>
                    </FormGroup>
                    < FormGroup row>
                      <Col xs="12" lg="6">
                        <Field
                          name="stateLic"
                          type="text"
                          component={FormInput}
                          label="State License"
                          inputPlaceHolder="Enter state license"
                        />
                      </Col>
                      <Col xs="12" lg="6">
                        <Field
                          name="dea"
                          type="text"
                          component={FormInput}
                          label="DEA # (If ordering Controlled Substances)"
                        />
                      </Col>
                    </FormGroup>
                  </>
                }
              </>
            }

            {/* For Account Type Veternarian Patient */}

            {data && data.value === 2 &&
              <>
                <FormGroup row>
                  <Col>
                    <Field
                      name="emailMas"
                      type="email"
                      component={FormInput}
                      label="Please enter the email of your veterinarian (or should we have them search for the clinic/vet name.)"
                      inputPlaceHolder="Enter Email"
                    />
                  </Col>
                </FormGroup>
              </>
            }

            {/* For Account Type Customer - Validated Prescriptions */}

            {data && data.value === 3 &&
              <>
                <FormGroup row>
                  <Col xs="12" lg="6">
                    <Field
                      name="title"
                      type="text"
                      component={FormInput}
                      label="Title"
                      inputPlaceHolder="Enter title"
                      normalize={captialize}
                    />
                  </Col>
                  <Col xs="12" lg="6">
                    <Field
                      name="business"
                      type="text"
                      component={FormInput}
                      label="Business name "
                      inputPlaceHolder="Enter name"
                      normalize={captialize}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row className="my-0">
                  <Col xs="12" lg="6">
                    <Field
                      name="phone"
                      type="number"
                      component={FormInput}
                      label="Main Phone No *"
                      inputPlaceHolder="Enter phone No"
                      normalize={mobile}
                    />
                  </Col>
                  <Col xs="12" lg="6">
                    <Field
                      name="zip"
                      type="number"
                      component={FormInput}
                      label="Zip"
                      inputPlaceHolder="Enter Zip"
                    />
                  </Col>
                </FormGroup>
                <br />
                <FormGroup row>
                  <Col xs="12" lg="6">
                    <Field
                      name="streetAdd1"
                      type="text"
                      component={FormInput}
                      label="Street Address 1"
                      inputPlaceHolder="Enter address"
                    />
                  </Col>
                  <Col xs="12" lg="6">
                    <Field
                      name="streetAdd2"
                      type="text"
                      component={FormInput}
                      label="Street Address 2"
                      inputPlaceHolder="Enter address"
                    />
                  </Col>
                  <Col xs="12" lg="6">
                    <Field
                      name="city"
                      type="text"
                      component={FormInput}
                      label="City"
                      inputPlaceHolder="Enter city name"
                    />
                  </Col>
                  <Col xs="12" lg="6">
                    <Field
                      name="state"
                      type="text"
                      component={FormInput}
                      label="State"
                      inputPlaceHolder="Enter state name"
                    />
                  </Col>
                </FormGroup>
              </>
            }
          </CardBody>
          <div style={{ paddingBottom: 30 }} className="right-btn-main">
            <Button color="primary" className="btn-pill pull-left" onClick={previousPage} style={{ marginLeft: '20px' }} type="button">
              <i className="fa fa-chevron-left" />
              Previous
              </Button>
            <Button color="primary" className="btn-pill pull-right" disabled={pristine || submitting} type="submit" style={{ marginRight: '20px' }}>
              Next
                <i className="fa fa-check" />
            </Button>
          </div>
        </Card>
      </Col>
    </form >
  );
};

const selector = formValueSelector('wizardForm')
StepTwoForm = connect(
  state => {
    const userType = selector(state, 'userType');
    const hasAdminControl = selector(state, 'adminControl');
    return {
      userType,
      hasAdminControl
    }
  }
)(StepTwoForm);

// Wiard Form property types
StepTwoForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  previousPage: PropTypes.func,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(StepTwoForm);
