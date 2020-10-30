import React from "react";
import "./Calc.css";

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div onClick={this.props.handleClick} className="btn">
        <p>Submit</p>
      </div>
    );
  }
}

class ErrorMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 11,
    };
  }
  render() {
    return (
      <div className={this.props.show ? "errorMsg" : "hideErrorMsg"}>
        <h3>{this.props.msg}</h3>
      </div>
    );
  }
}

class InputField extends React.Component {
  constructor() {
    super();
    this.state = {
      type: "number",
    };
  }

  handleInput(e) {
    const value = e.target.value;
    this.props.onChange(this.props.name, value);
  }

  render() {
    return (
      <div>
        <h3>{this.props.label}</h3>
        <input
          type={this.props.type ? this.props.type : this.state.type}
          name={this.props.name}
          onChange={(e) => this.handleInput(e)}
          value={this.props.value}
          className="input"
        />
      </div>
    );
  }
}

class Box extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return <div className="box">{this.props.children}</div>;
  }
}

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      isFieldsEmpty: true,
      isWeightValid: false,
      weightFieldLabel: "weight",
      targetFieldLabel: "target",
      error: {
        weight: false,
        weightField: false,
        target: false,
        message: "",
      },
      weightValue: 0,
      targetValue: 0,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleInput(field, value) {
    switch (field) {
      case "weight":
        console.log(field);
        this.setState(
          {
            weightValue: value,
          },
          () => this.isFieldsEmpty()
        );
        break;
      case "target":
        console.log(field);
        this.setState(
          {
            targetValue: value,
          },
          () => this.isFieldsEmpty()
        );
        break;
      default:
        break;
    }
  }

  isFieldsEmpty() {
    if (!this.state.weightValue || !this.state.targetValue) {
      this.setState((prevState) => ({
        error: {
          ...prevState.error,
          weight: this.state.weightValue === "",
          target: this.state.targetValue === "",
          message: "Please fill all boxes",
        },
      }));
      return true;
    } else {
      this.setState((prevState) => ({
        error: {
          ...prevState.error,
          target: false,
        },
      }));
      return false;
    }
  }
  handleClick() {
    console.log("Any weight errors: ", this.state.error.weight);
    console.log("Any target errors: ", this.state.error.target);
    if (
      !this.isFieldsEmpty() &&
      !this.state.error.weight &&
      !this.state.error.target
    ) {
    } //calculate
  }

  render() {
    return (
      <div className="calculatorContainer">
        <Box>
          <ErrorMessage
            msg={this.state.error.message}
            show={this.state.error.weight || this.state.error.target}
          />

          <InputField
            onChange={this.handleInput}
            label={this.state.weightFieldLabel}
            name={this.state.weightFieldLabel}
            value={this.state.weightValue}
          />

          <InputField
            onChange={this.handleInput}
            label={this.state.targetFieldLabel}
            name={this.state.targetFieldLabel}
            value={this.state.targetValue}
            type={this.state.targetFieldLabel}
          />
          <Button handleClick={this.handleClick} />
        </Box>
      </div>
    );
  }
}

export default Calculator;
