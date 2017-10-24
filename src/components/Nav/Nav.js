import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setCurrentUser, setAuthToken} from '../../actions';
import {clearAuthToken} from '../../local-storage';
import './Nav.css';

class Nav extends Component {
  logOut() {
    this.props.dispatch(setCurrentUser(null));
    this.props.dispatch(setAuthToken(null));
    clearAuthToken();
  }

  render() {
    return (
      <nav className="navigation">
				<ul className="main-nav">
          {
            (this.props.loggedIn)
              ? <li><Link to="/" onClick={() => this.logOut()}>Logout</Link></li>
              : <li><Link to="/login">Login</Link></li>
          }
				</ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.rsvp.authToken !== null
});

export default connect(mapStateToProps)(Nav);