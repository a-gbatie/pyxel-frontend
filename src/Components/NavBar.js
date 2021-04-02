import React from 'react';
import {Link} from 'react-router-dom'



class Navbar extends React.Component {


render() {
    return (
        <div className="right menu">
          <div className="item">
            {/* <Link to="/" className="ui button">
              Home
            </Link> */}
            <Link to="/login" className="ui button">
              Login
            </Link>
            <Link to="/signup" className="ui button">
              Sign Up
            </Link>
            {/* <Link to="/create"className="ui button">
              Create Post
            </Link> */}
          </div>
        </div>
    );
  }
}

export default Navbar;