import React from 'react';
import { FormGroup, FormText, Input, Label } from 'reactstrap';
import { DropdownList, SelectList } from 'react-widgets'
import DatePicker from "react-datepicker";

// form input for field

const FormInput = ({ input, label, type, inputPlaceHolder, maxDate, minDate, meta: { error, touched } }) => (
  <FormGroup>
    <Label>{label}</Label>
    <Input
      {...input}
      type={type}
      placeholder={inputPlaceHolder}
      max={maxDate}
      min={minDate}
    />
    {touched && <FormText className="help-block error-color">{error}</FormText>}
  </FormGroup>
);

// Select dropdown input for field

const FormDropdownList = ({input, label, data, valueField, textField, meta: { error, touched } }) =>
  <FormGroup>
    <Label>{label}</Label>
    <DropdownList
      {...input}
      data={data}
      valueField={valueField}
      textField={textField}
      onSelect={input.onChange}
    />
    {touched && error && <span className="error-color">{error}</span>}
  </FormGroup>

// Select radio input for field

const FormSelectList = ({ input, label, data, meta: { error, touched } }) =>
  <FormGroup>
    <Label>{label}</Label>
    <SelectList {...input}
      onBlur={() => input.onBlur()}
      data={data} />
    {touched && error && <span className="error-color">{error}</span>}
  </FormGroup>

//Date picker input for field

const FormDatePicker = ({ input, label, inputPlaceHolder, meta: { error, touched } }) =>
  <FormGroup>
    <Label>{label}</Label>
    <DatePicker
      {...input}
      onBlur={() => input.onBlur()}
      dateForm="MM/DD/YYYY"
      selected={input.value}
      maxDate={new Date()}
      placeholder={inputPlaceHolder} />
    {touched && error && <span className="error-color">{error}</span>}
  </FormGroup>

export {
  FormInput,
  FormSelectList,
  FormDropdownList,
  FormDatePicker
}
