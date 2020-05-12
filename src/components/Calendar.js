import React, { Component } from 'react';
import { DatePicker, FontIcon } from 'react-md';
import '../index.css';
// import './Button.css';

class C_Calendar extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.changeDate = this.changeDate.bind(this);
  }

  onChange(pValue) {

    if (this.props.onChange)
      this.props.onChange({ target: { name: this.props.name, value: pValue } });
  }

  changeDate(date){

  }

  render() {
    var inputStyle = this.props.inputStyle;

    if (!inputStyle) inputStyle = {};

    if (!inputStyle.fontSize) inputStyle.fontSize = 15;

    return (
      <DatePicker
        id={this.props.name}
        name={this.props.name}
        label={this.props.label}
        className={this.props.className}
        showAllDays={this.props.allDays}
        inputStyle={this.props.inputStyle}
        rightIcon={this.props.rightIcon}
        cancelLabel={this.props.cancelLabel}
        onChange={this.onChange}
        style={this.props.style}
        value={this.props.value}
        fullWidth={this.props.fullWidth}
        icon={false}
        yearsDisplayed={239}
        portal
        lastChild
        locales="pt-BR"
        renderNode={null}
        disableScrollLocking
        defaultValue={this.props.defaultValue}
      />
    );
  }
}

export default C_Calendar;