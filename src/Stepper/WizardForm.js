import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stepper from 'react-stepper-horizontal';
import { Card } from 'reactstrap';
import StepOneForm from './StepOne';
import StepTwoForm from './StepTwo';
import StepThreeForm from './StepThree';
import StepFourForm from './StepFour';

class WizardForm extends Component {

  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.handleAccountType = this.handleAccountType.bind(this);
    this.state = {
      page: 0,
      steps: [
        { title: 'Step One' },
        { title: 'Step Two' },
        { title: 'Step Three' },
        { title: 'Step Four' }
      ],
      accountType: null
    };
  }

  // For moving to next page
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  // For moving to previous page
  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  // get selected account type at step one
  handleAccountType(value) {
    console.log(value);
    this.setState({ accountType: value });
  }

  render() {
    const { onSubmit } = this.props;
    const { page, steps } = this.state;

    return (
      <Card>
        {/* Horizontal Stepper */}
        <Stepper steps={steps} activeStep={page} />

        {/* Step One */}
        {page === 0 &&
          <StepOneForm
            onSubmit={this.nextPage}
            onSelectAccountType={this.handleAccountType}
          />
        }
        {/* Step Two */}
        {page === 1 && (
          <StepTwoForm
            data={this.state.accountType}
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {/* Step Three */}
        {page === 2 && (
          <StepThreeForm
            data={this.state.accountType}
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {/* Step Four */}
        {page === 3 && (
          <StepFourForm
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}
      </Card>
    );
  }

}
// Wiard Form property types
WizardForm.propTypes = {
  onSubmit: PropTypes.func
};

export default WizardForm;