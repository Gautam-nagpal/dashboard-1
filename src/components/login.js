import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
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
                  <h3>log In</h3>
                </button>
              </Link>

              <div class="login-form">
                <input
                  type="text"
                  placeholder="Email or Username"
                  class="input"
                  required
                />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  class="input"
                  required
                />
                <br />
                <button class="btn">log in</button>
                <span>
                  <Link to="Forgot">I forgot my username or password.</Link>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
