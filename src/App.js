import React, { Component } from 'react';

import WizardForm from './Stepper';
import {
  Button,
  Card,
  CardBody,
  Col
} from 'reactstrap';
import 'react-widgets/dist/css/react-widgets.css';
import "react-datepicker/dist/react-datepicker.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: true,
      resultData: null
    };
  }

  // For getting result after submitting form
  result = (values) => {
    console.log('result is', values);
    this.showHideForm();
    this.setState({ resultData: values });
  }

  // Hide/Show Form and Result View
  showHideForm = () => {
    this.setState({ showForm: !this.state.showForm });
  }

  // For converting date
  convertDate = (str) => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  render() {
    const { showForm, resultData } = this.state;
    return (

      // Main App Component
      <>
        {showForm === true && (
          <WizardForm onSubmit={this.result} />
        )}
        {showForm === false && (
          <Col xs="12" sm="12">
            <Card className="card-border">
              <CardBody>
                <h3> Thank you for completing the registration.</h3>
                <div>
                  <p><strong>Email :</strong>{resultData.email}</p>
                  <p><strong>First Name :</strong>{resultData.firstName}</p>
                  <p><strong>Last Name :</strong>{resultData.lastName}</p>
                  <p><strong>Account Type :</strong>{resultData.accountType.accountTypeName}</p>

                  {/* View For Account Type Veternarian Master Account  */}
                  {resultData && resultData.accountType.value === 0 &&
                    <>
                      <p><strong>Title :</strong>{resultData.title}</p>
                      <p><strong>Business/Clinic name :</strong>{resultData.businessName}</p>
                      <p><strong>Main Phone No. :</strong>{resultData.phone}</p>
                      <p><strong>Zip :</strong>{resultData.zip}</p>
                      <p><strong>Street Address :</strong>{resultData.streetAdd1 + '\n' + resultData.streetAdd2}</p>
                      <p><strong>City :</strong>{resultData.city}</p>
                      <p><strong>State :</strong>{resultData.state}</p>
                      <p><strong>State License (State) :</strong>{resultData.stateLic}</p>
                      <p><strong>DEA :</strong>{resultData.dea}</p>
                      <p><strong>Administered In‐Clinic? :</strong> {resultData.adminControl}</p>
                      {resultData.adminControl && resultData.adminControl === 'Yes' &&
                        <>
                          <p><strong>Veterinarian’s Driver’s License :</strong>{resultData.vetDriverLic}</p>
                          <p>Driver’s License State: {resultData.DL}</p>
                          <p>Veterinarian’s DOB: {this.convertDate(resultData.vetDOB)}</p>
                        </>
                      }
                      <p><strong>Payment Method :</strong>{resultData.paymentMethod}</p>
                      {resultData.paymentMethod && resultData.paymentMethod === 'Net 30' &&
                        <>
                          <p><strong>Interested in Net 30 :</strong>{resultData.isNet3D}</p>
                        </>
                      }
                    </>
                  }
                  {/* View Account Type Veternarian Personell Linked to Master Veternarian Account */}
                  {resultData && resultData.accountType.value === 1 &&
                    <>
                      <p><strong>Email of account master : </strong>{resultData.emailMas}</p>
                      <p><strong>First Name :</strong>{resultData.firstNameVetPer}</p>
                      <p><strong>Last Name :</strong>{resultData.lastNameVetPer}</p>
                      <p><strong>Title :</strong>{resultData.title}</p>
                      <p><strong>Authorized User Email :</strong>{resultData.AuthEmailAccMas}</p>
                      <p><strong>User Type :</strong>{resultData.userType}</p>
                      {resultData.userType && resultData.userType === 'Technician' &&
                        <>
                          <p><strong>Techincian License :</strong>{resultData.techLic}</p>
                          <p><strong>State License :</strong>{resultData.stateLic}</p>
                        </>
                      }
                      {resultData.userType && resultData.userType === 'Veterinarian' &&
                        <>
                          <p><strong>Veterinarian License :</strong>{resultData.techLic}</p>
                          <p><strong>State License :</strong>{resultData.stateLic}</p>
                          <p><strong>DEA :</strong>{resultData.dea}</p>
                        </>
                      }
                    </>
                  }
                  {/* View For Account Type Veternarian Patient */}
                  {resultData && resultData.accountType.value === 2 &&
                    <>
                      <p><strong>Email of account master :</strong>{resultData.emailMas}</p>
                      <p><strong>Shipping Address :</strong>{resultData.shippAdd}</p>
                      <p><strong>Street Address :</strong>{resultData.streetAdd1 + '\n' + resultData.streetAdd2}</p>
                      <p><strong>Zip :</strong>{resultData.zip}</p>
                      <p><strong>City :</strong>{resultData.city}</p>
                      <p><strong>State :</strong>{resultData.state}</p>
                    </>
                  }
                  {/* View For Account Type Customer - Validated Prescriptions */}
                  {resultData && resultData.accountType.value === 3 &&
                    <>
                      <p><strong>Email of account master :</strong>{resultData.emailMas}</p>
                      <p><strong>Title :</strong>{resultData.title}</p>
                      <p><strong>Business/Clinic name :</strong>{resultData.businessName}</p>
                      <p><strong>Main Phone No. :</strong>{resultData.phone}</p>
                      <p><strong>Zip :</strong>{resultData.zip}</p>
                      <p><strong>Street Address :</strong>{resultData.streetAdd1 + '\n' + resultData.streetAdd2}</p>
                      <p><strong>City :</strong>{resultData.city}</p>
                      <p><strong>State :</strong>{resultData.state}</p>
                    </>
                  }
                  <p><strong>Do You Intend to Prescribe Medication to Your Patients Through our Website? :</strong>{resultData.medTWeb}</p>
                  {resultData.medTWeb && resultData.medTWeb === 'Yes' &&
                    <>
                      <p><strong>Would you like us to bill your clinic or your customers directly for the medications you prescribe? :</strong>{resultData.billmedi}</p>
                      <p><strong>Always Set Default Payment Method to “Bill Customer :</strong>{resultData.bilPayMethod}</p>
                    </>
                  }
                </div>
              </CardBody>
              <div style={{ MarginLeft: 30, padding: 30 }} className="single-btn-main">
                <Button color="primary" className="btn-pill pull-right" type="button" style={{ marginRight: '20px' }}
                  onClick={this.showHideForm}>
                  Create Another account
                <i className="fa fa-chevron-right" />
                </Button>
              </div>
            </Card>
          </Col>
        )}
      </>
    );
  }
}

export default App;
