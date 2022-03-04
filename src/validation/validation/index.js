// Validators for form input

const validate = (values) => {
  const errors = {};
  const requiredField = 'This field is required';

  if (!values.firstName) {
    errors.firstName = requiredField;
  }

  if (!values.lastName) {
    errors.lastName = requiredField;
  }

  if (!values.email) {
    errors.email = requiredField;
  }

  if (
    values.email
    && !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email)
  ) {
    errors.email = 'Email is invalid';
  }

  if (!values.password) {
    errors.password = requiredField;
  }

  if (
    values.password
    && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(values.password)
  ) {
    errors.password = 'Password is invalid';
  }

  if (!values.address) {
    errors.address = requiredField;
  }

  if (!values.accountType) {
    errors.accountType = requiredField;
  }

  if (!values.title) {
    errors.title = requiredField;
  }

  if (!values.businessName) {
    errors.businessName = requiredField;
  }
  if (!values.phone) {
    errors.phone = requiredField;
  }
  if (!values.zip) {
    errors.zip = requiredField;
  }
  if (!values.streetAdd1) {
    errors.streetAdd1 = requiredField;
  }
  if (!values.city) {
    errors.city = requiredField;
  }
  if (!values.state) {
    errors.state = requiredField;
  }
  if (!values.stateLic) {
    errors.stateLic = requiredField;
  }
  if (!values.dea) {
    errors.dea = requiredField;
  }

  if (!values.adminControl) {
    errors.adminControl = requiredField;
  }

  if (
    values.emailMas
    && !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.emailMas)
  ) {
    errors.emailMas = 'Email is invalid';
  }

  if (!values.vetDriverLic) {
    errors.vetDriverLic = requiredField;
  }

  if (!values.DL) {
    errors.DL = requiredField;
  }

  if (!values.vetDOB) {
    errors.vetDOB = requiredField;
  }

  if (!values.emailAccMas) {
    errors.emailAccMas = requiredField;
  }

  if (!values.firstNameVetPer) {
    errors.firstNameVetPer = requiredField;
  }

  if (!values.lastNameVetPer) {
    errors.lastNameVetPer = requiredField;
  }

  if (
    values.AuthEmailAccMas
    && !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.AuthEmailAccMas)
  ) {
    errors.AuthEmailAccMas = 'Email is invalid';
  }

  if (!values.userType) {
    errors.userType = requiredField;
  }

  if (!values.techLic) {
    errors.techLic = requiredField;
  }

  if (!values.vetLic) {
    errors.vetLic = requiredField;
  }

  if (!values.paymentMethod) {
    errors.paymentMethod = requiredField;
  }
  if (!values.cardNum) {
    errors.cardNum = requiredField;
  }
  if (!values.validThru) {
    errors.validThru = requiredField;
  }
  if (!values.cvc) {
    errors.cvc = requiredField;
  }
  if (!values.isNet3D) {
    errors.isNet3D = requiredField;
  }
  if (!values.shippAdd) {
    errors.shippAdd = requiredField;
  }
  if (!values.billmedi) {
    errors.billmedi = requiredField;
  }
  if (!values.bilPayMethod) {
    errors.bilPayMethod = requiredField;
  }
  if (!values.acck) {
    errors.acck = requiredField;
  }

  return errors;
};

export default validate;