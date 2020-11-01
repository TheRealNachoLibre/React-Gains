import React from "react";
import "./Calc.css";
import { items } from "./CalcMessage";

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
      type: "",
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
    this.calculate = this.calculate.bind(this);
  }

  calculate() {
    let i = "";
    let curr = this.state.weightValue;
    let tar = this.state.targetValue;
    if (curr === 0 || tar === 0) {
        i = ""; 
    }
    if (tar > curr) {
      //gain
      i = "gain";
    } else if (tar + 150 < curr) {
      //slow
      i = "slow";
    } else if (tar < curr) {
      //lose
      i = "lose";
    } else {
      //maintain
      i = "maintain";
    }
    let found = items.find((item) => item.id === i);
    return (
      <div>
        <ul className={this.props.value ? "hiddenList" : "showList"}>
          <li>{found.type}</li>
          <li>{found.frequency}</li>
          <li>{found.diet}</li>
          <li>{found.supplements}</li>
        </ul>
      </div>
    );
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
      //the goal was to ensure that the values are integers and not empty fields, however it broke when implemented
      // (!this.state.targetValue.isInteger() || !this.state.weightValue.isInteger())) {
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
    //if the fields aren't empty and there are no errors with the integers call the calculate function
    if (
      !this.isFieldsEmpty() &&
      !this.state.error.weight &&
      !this.state.error.target
    ) {
      console.log("no errors for the input fields");
    }
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
          <Button handleClick={this.handleClick} calc={this.calc} />
        </Box>

        {/* This is where the response will be displayed */}
        <Box className="resultBox">
          <h3>The Recommended Plan:</h3>
          <div value={!this.state.error.weight || !this.state.error.target}>
            {this.calculate()}
          </div>
        </Box>
      </div>
    );
  }
}

export default Calculator;
