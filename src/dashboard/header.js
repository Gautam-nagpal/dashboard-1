import React, { Component } from "react";

class Header extends Component {
  state = {};

  render() {
    let { logout } = this.props;
    return (
      <div>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>News</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li style={{ float: "right" }}>
            <button onClick={logout} className="active">
              Logout
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
