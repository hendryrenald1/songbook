import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return <Link to="/admin">admin</Link>;
  }
}

export default Header;
