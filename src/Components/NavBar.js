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
            <Link to="/" className="ui button">
              Home
            </Link>
            <Link to="/signup" className="ui button">
              Create User
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