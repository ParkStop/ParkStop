import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() {

    return (
      <div>
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/User">User(test)</Link></li>
        </ul>
      </div>
    );
  }
}

export default connect(
  null
)(Home);