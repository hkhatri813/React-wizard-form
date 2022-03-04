import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { FormInput, FormDropdownList } from '../FormInput';
import validate from '../validation/validation';
import { captialize } from '../validation/normalize/index.js';
import { Button, Card, CardBody, Col, FormGroup } from 'reactstrap';

let StepOneForm = (props) => {

  // Array for account type option
  const accountType = [
    { accountTypeName: 'Veterinarian Master Account', value: 0 },
    { accountTypeName: 'Veterinarian Personnel Linked to Master Veterinarian Account', value: 1 },
    { accountTypeName: 'Veterinarian Patient', value: 2 },
    { accountTypeName: 'Customer - Validated Prescriptions', value: 3 }
  ];

  // get props
  const { handleSubmit, pristine, submitting, onSelectAccountType } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Col xs="12" sm="12">
        <Card className="card-border">
          <CardBody>
            <FormGroup row>
              <Col xs="12" lg="2">
                <Field
                  name="salution"
                  type="text"
                  component={FormDropdownList}
                  label="Salution"
                  data={accountType}
                  defaultValue={accountType[0].accountTypeName}
                  valueField="value"
                  textField="accountTypeName"
                  onChange={onSelectAccountType}
                />
              </Col>
              <Col xs="12" lg="5">
                <Field
                  name="firstName"
                  type="text"
                  component={FormInput}
                  label="First Name"
                  inputPlaceHolder="Enter First Name"
                  normalize={captialize}
                />
              </Col>
              <Col xs="12" lg="5">
                <Field
                  name="lastName"
                  type="text"
                  component={FormInput}
                  label="Last Name"
                  inputPlaceHolder="Enter Last Name"
                  normalize={captialize}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xs="12" lg="6">
                <Field
                  name="email"
                  type="email"
                  component={FormInput}
                  label="Email *"
                  inputPlaceHolder="Enter Email"
                />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="password"
                  type="password"
                  component={FormInput}
                  label="Password *"
                  inputPlaceHolder="Enter password"
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col xs="12" md="12">
                <Field
                  name="accountType"
                  component={FormDropdownList}
                  label="Select Account Type"
                  data={accountType}
                  defaultValue={accountType[0]}
                  valueField="value"
                  textField="accountTypeName"
                  onChange={onSelectAccountType}
                />
              </Col>
            </FormGroup>
            <p>Please note registration is restricted to veterinarians only. If you are an animal owner, veterinarian assistant or otherwise wish to order through our site please contact your veterinarian.</p>
          </CardBody>
          <div style={{ MarginLeft: 30, padding: 30 }} className="single-btn-main">
            <Button color="primary" className="btn-pill pull-right" disabled={pristine || submitting} type="submit" style={{ marginRight: '20px' }}>
              Next
                <i className="fa fa-chevron-right" />
            </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
};

// Wiard Form property types
StepOneForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleAccountType: PropTypes.func,
  pristine: PropTypes.bool,
  previousPage: PropTypes.func,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(StepOneForm);