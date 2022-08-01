import React, { Component } from 'react';

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
      this.state = {
          equal: 0,
          number1: null,
          number2: null,
          operator: 1
      };
      this.equals = this.equals.bind(this);
      this.setNumber1 = this.setNumber1.bind(this);
      this.setNumber2 = this.setNumber2.bind(this);
      this.setNumber3 = this.setNumber3.bind(this);
      this.setNumber4 = this.setNumber4.bind(this);
      this.setNumber5 = this.setNumber5.bind(this);
      this.setNumber6 = this.setNumber6.bind(this);
      this.setNumber7 = this.setNumber7.bind(this);
      this.setNumber8 = this.setNumber8.bind(this);
      this.setNumber9 = this.setNumber9.bind(this);
      this.setOperator1 = this.setOperator1.bind(this);
      this.setOperator2 = this.setOperator2.bind(this);
      this.setOperator3 = this.setOperator3.bind(this);
      this.setOperator4 = this.setOperator4.bind(this);
      this.clear = this.clear.bind(this);
  }

    setNumber1() {
        if (this.state.number1 == null) {
            this.setState({
                number1: 1
            });
        }
        else {
            this.setState({
                number2: 1
            });
        }
    }

    setNumber2() {
        if (this.state.number1 == null) {
            this.setState({
                number1: 2
            });
        }
        else {
            this.setState({
                number2: 2
            });
        }
    }

    setNumber3() {
        if (this.state.number1 == null) {
            this.setState({
                number1: 3
            });
        }
        else {
            this.setState({
                number2: 3
            });
        }
    }

    setNumber4() {
        if (this.state.number1 == null) {
            this.setState({
                number1: 4
            });
        }
        else {
            this.setState({
                number2: 4
            });
        }
    }

    setNumber5() {
        if (this.state.number1 == null) {
            this.setState({
                number1: 5
            });
        }
        else {
            this.setState({
                number2: 5
            });
        }
    }

    setNumber6() {
        if (this.state.number1 == null) {
            this.setState({
                number1: 6
            });
        }
        else {
            this.setState({
                number2: 6
            });
        }
    }

    setNumber7() {
        if (this.state.number1 == null) {
            this.setState({
                number1: 7
            });
        }
        else {
            this.setState({
                number2: 7
            });
        }
    }

    setNumber8() {
        if (this.state.number1 == null) {
            this.setState({
                number1: 8
            });
        }
        else {
            this.setState({
                number2: 8
            });
        }
    }

    setNumber9() {
        if (this.state.number1 == null) {
            this.setState({
                number1: 9
            });
        }
        else {
            this.setState({
                number2: 9
            });
        }
    }

    setOperator1() {
        this.setState({
            operator: 1
        });
    }
    setOperator2() {
        this.setState({
            operator: 2
        });
    }
    setOperator3() {
        this.setState({
            operator: 3
        });
    }
    setOperator4() {
        this.setState({
            operator: 4
        });
    }

    clear() {
        this.setState({
            number1: null,
            number2: null
        });
    }

    equals() {
        if (this.state.operator == 1) {
            this.setState({
                equal: this.state.number1 + this.state.number2
            });
        }
        else if (this.state.operator == 2) {
            this.setState({
                equal: this.state.number1 - this.state.number2
            });
        }
        else if (this.state.operator == 3) {
            this.setState({
                equal: this.state.number1 * this.state.number2
            });
        }
        else if (this.state.operator == 4) {
            this.setState({
                equal: this.state.number1 / this.state.number2
            });
        }
  }

  render() {
    return (
      <div>
            <h1>Calculator</h1>

            <p aria-live="polite">numbers: <strong>{this.state.number1}</strong> and <strong>{this.state.number2}</strong></p>
            <p aria-live="polite">Equals: <strong>{this.state.equal}</strong></p>

            <table>
                <tr>
                    <button className="btn btn-primary" onClick={this.clear}>Clear</button>
                    <button className="btn btn-primary" onClick={this.setOperator1}>+</button>
                    <button className="btn btn-primary" onClick={this.setOperator2}>-</button>
                </tr>
                <tr>
                    <button className="btn btn-primary" onClick={this.setNumber1}>1</button>
                    <button className="btn btn-primary" onClick={this.setNumber2}>2</button>
                    <button className="btn btn-primary" onClick={this.setNumber3}>3</button>
                    <button className="btn btn-primary" onClick={this.setOperator3}>*</button>
                </tr>
                <tr>
                    <button className="btn btn-primary" onClick={this.setNumber4}>4</button>
                    <button className="btn btn-primary" onClick={this.setNumber5}>5</button>
                    <button className="btn btn-primary" onClick={this.setNumber6}>6</button>
                    <button className="btn btn-primary" onClick={this.setOperator4}>/</button>
                </tr>
                <tr>
                    <button className="btn btn-primary" onClick={this.setNumber7}>7</button>
                    <button className="btn btn-primary" onClick={this.setNumber8}>8</button>
                    <button className="btn btn-primary" onClick={this.setNumber9}>9</button>
                    <button className="btn btn-primary" onClick={this.equals}>=</button>
                </tr>
            </table>

      </div>
    );
  }
}
