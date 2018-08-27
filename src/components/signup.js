import React, { Component } from "react";
import { Link } from "react-router-dom";

class Signup extends Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <div class="wrapper">
            <div class="container">
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
              <div class="signup-form">
                <input type="text" placeholder="Name" className="input" />
                <input
                  type="text"
                  placeholder="Your Email Address"
                  class="input"
                />
                <br />
                <input
                  type="text"
                  placeholder="Choose a Username"
                  class="input"
                />
                <br />
                <input
                  type="password"
                  placeholder="Choose a Password"
                  class="input"
                />
                <br />
                <input
                  type="password"
                  placeholder="Enter password again"
                  class="input"
                />
                <br />
                <div class="btn">Create account</div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
