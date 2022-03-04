import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import validate from '../validation/validation';
import { FormSelectList } from '../FormInput';
import { Button, Card, CardBody, Col, FormGroup, Label } from 'reactstrap';

let StepFourForm = (props) => {
  const { handleSubmit, pristine, previousPage, submitting, hasIntent } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Col sm="12">
        <Card className="card-border">
          <CardBody>
            <FormGroup row>
              <Col xs="12" lg="12">
                <Field
                  name="medTWeb"
                  component={FormSelectList}
                  label="Do You Intend to Prescribe Medication to Your Patients Through our Website?"
                  data={['Yes', 'No']} />
              </Col>
            </FormGroup>
            {
              hasIntent === 'Yes' &&
              <>
                <FormGroup row>
                  <Col xs="12" lg="12">
                    <Field
                      name="billmedi"
                      component={FormSelectList}
                      label="Would you like us to bill your clinic or your customers directly for the medications you prescribe?"
                      data={['Yes', 'No']} />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col xs="12" lg="12">
                    <Field
                      name="bilPayMethod"
                      component={FormSelectList}
                      label="Always Set Default Payment Method to “Bill Customer"
                      data={['Yes', 'No']} />
                  </Col>
                </FormGroup>
              </>
            }
            <FormGroup row>
              <Field name="acck" id="acck" component="input" type="checkbox" />
              <Label htmlFor="acck"> I acknowledge that my customers will have access to all pricing information relating to the orders that I initiate on their behalf.</Label>
            </FormGroup>
          </CardBody>
          <div style={{ paddingBottom: 30 }} className="right-btn-main">
            <Button color="primary" className="btn-pill pull-left" onClick={previousPage} style={{ marginLeft: '20px' }} type="button">
              <i className="fa fa-chevron-left" />
              Previous
            </Button>
            <Button color="primary" className="btn-pill pull-right" disabled={pristine || submitting} type="submit" style={{ marginRight: '20px' }}>
              Save
              <i className="fa fa-chevron-right" />
            </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
};

const selector = formValueSelector('wizardForm')
StepFourForm = connect(
  state => {
    const hasIntent = selector(state, 'medTWeb'); // set selected value from dropdown
    return {
      hasIntent
    }
  }
)(StepFourForm);

// Wiard Form property types
StepFourForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  previousPage: PropTypes.func,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: true, // to reset form after submit
  forceUnregisterOnUnmount: true,
  validate,
})(StepFourForm);