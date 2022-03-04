import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import validate from '../validation/validation';
import { FormInput, FormSelectList } from '../FormInput';
import { creditCard, cvc } from '../validation/normalize/index.js';
import { Button, Card, CardBody, Col, FormGroup, Label } from 'reactstrap';

let StepThreeForm = (props) => {

  const { handleSubmit, pristine, previousPage, submitting, data, hasPayMethodValue } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Col xs="12" sm="12">
        <Card className="card-border">
          <CardBody>

            {/* For Account Type Veternarian Master Account */}

            {data && data.value === 0 &&
              <FormGroup>
                <FormGroup row>
                  <Col xs="12" lg="6">
                    <Field
                      name="paymentMethod"
                      component={FormSelectList}
                      label="Payment Method"
                      data={['Credit Card', 'Net 30']} />
                  </Col>
                </FormGroup>
                {
                  hasPayMethodValue === 'Credit Card' &&
                  <FormGroup row>
                    <Col xs="12" lg="6">
                      <Label>Credit Card Details</Label>
                    </Col>
                    <Col xs="6" lg="12" className="payment-method">
                      <FormGroup>
                        <Field
                          name="cardNum"
                          component="input"
                          type="number"
                          pattern="[\d| ]{16,22}"
                          normalize={creditCard}
                          placeholder="Card Number"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Field
                          name="validThru"
                          component="input"
                          type="number"
                          pattern="[\d| ]{16,22}"
                          normalize={creditCard}
                          placeholder="Valid Thru"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Field
                          name="cvc"
                          component="input"
                          type="number"
                          pattern="[\d| ]{16,22}"
                          placeholder="Card CVC"
                          normalize={cvc}
                        />
                      </FormGroup>
                    </Col>
                  </FormGroup>
                }
                {
                  hasPayMethodValue === 'Net 30' &&
                  <FormGroup row>
                    <Col xs="12" lg="6">
                      <Field
                        name="isNet3D"
                        component={FormSelectList}
                        label="Interested in Net 30"
                        data={['Yes', 'No']} />
                    </Col>
                  </FormGroup>
                }
              </FormGroup>
            }

            {/* For Account Type Veterinarian Personnel Linked to Master Veternarian Account */}

            {data && data.value === 2 &&
              <FormGroup row>
                <h2>Shipping Address</h2>
                <Col xs="12" lg="6">
                  <Field
                    name="shippAdd"
                    type="text"
                    component={FormInput}
                    label="Shipping Address"
                    inputPlaceHolder="Enter address"
                  />
                </Col>
                <Col xs="12" lg="6">
                  <Field
                    name="streetAdd1"
                    type="text"
                    component={FormInput}
                    label="Street 1"
                    inputPlaceHolder="Enter address"
                  />
                </Col>
                <Col xs="12" lg="6">
                  <Field
                    name="streetAdd2"
                    type="text"
                    component={FormInput}
                    label="Street 2"
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
                    name="zip"
                    type="number"
                    component={FormInput}
                    label="Zip"
                    inputPlaceHolder="Enter zip"
                  />
                </Col>
              </FormGroup>
            }

            {/* For Account Type Veternarian Patient */}

            {data && data.value === 3 &&
              <>
                <FormGroup row>
                  <Col>
                    <Field
                      name="emailvetMas"
                      type="email"
                      component={FormInput}
                      label="Vets email  *"
                      inputPlaceHolder="Enter Email"
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
              <i className="fa fa-chevron-right" />
            </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
};

StepThreeForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  previousPage: PropTypes.func,
  submitting: PropTypes.bool
};

const selector = formValueSelector('wizardForm')
StepThreeForm = connect(
  state => {
    const hasPayMethodValue = selector(state, 'paymentMethod')
    return {
      hasPayMethodValue
    }
  }
)(StepThreeForm);

// Wiard Form property types
export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(StepThreeForm);
