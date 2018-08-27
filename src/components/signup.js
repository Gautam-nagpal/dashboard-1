import React, { Component } from "react";
import { Link } from "react-router-dom";
import { resignup } from "../action/action.js";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    username: "",
    password: "",
    confirmpass: ""
  };

  change = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  Signup = e => {
    e.preventDefault();
    var mailformat = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([\.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i;
    if (this.state.email.match(mailformat)) {
      if (this.state.password === this.state.confirmpass) {
        resignup(this.state);
      } else {
        alert("password not match");
      }
    } else {
      alert(" wrong email id");
    }

    // var obj = JSON.parse(localStorage.getItem("data"));
    // console.log("local storage data coming===", obj);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.Signup}>
          <div className="wrapper">
            <div className="container">
              <Link to="/Signup">
                <button color="inherit" className="signup">
                  <h3> Sign Up</h3>
                </button>
              </Link>

              <Link to="Login">
                <button color="inherit" className="login">
                  <h3> log In</h3>
                </button>
              </Link>
              <div className="signup-form">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={this.change}
                  className="input"
                  required
                />
                <input
                  type="text"
                  placeholder="Your Email Address"
                  name="email"
                  onChange={this.change}
                  className="input"
                  required
                />
                <br />
                <input
                  type="text"
                  placeholder="Choose a Username"
                  name="username"
                  onChange={this.change}
                  className="input"
                  required
                />
                <br />
                <input
                  type="password"
                  placeholder="Choose a Password"
                  className="input"
                  minLength="10"
                  name="password"
                  onChange={this.change}
                  required
                />
                <br />
                <input
                  type="password"
                  placeholder="Confirm password "
                  className="input"
                  onChange={this.change}
                  name="confirmpass"
                  required
                />
                <br />
                <button type="Submit" className="btn">
                  Create account
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
