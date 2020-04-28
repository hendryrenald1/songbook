import React from "react";

const buttons = {
  left: [
    ["add", "add"],
    ["edit", "edit"],
    ["del", "del"],
  ],
  right: [
    ["admin", "admin"],
    ["logout", "logout"],
  ],
};

class AdminPanel extends React.Component {
  handleClick = (eventName) => () => {
    if (eventName === "logout") {
      return this.props.administer(eventName);
    }
    if (!this.props.edit) {
      this.props.administer(eventName);
    }
  };

  button = (eventName, label) => {
    const classes =
      "adminButton" +
      (eventName !== "logout" && this.props.edit ? " disabled" : "");
    return (
      <span
        key={eventName}
        onClick={this.handleClick(eventName)}
        className={classes}
        style={{ width: `${label.length}ch` }}
      >
        {label}
      </span>
    );
  };

  render() {
    return (
      <div className="row">
        <div className="col dark adminPanel">
          <div className="ap-left">
            {buttons.left.map((item) => this.button(item[0], item[1]))}
          </div>
          <div className="ap-right">
            {buttons.right.map((item) => this.button(item[0], item[1]))}
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPanel;
