import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
    constructor() {
        super();
        this.onLogoutClick = this.onLogoutClick.bind(this);
    }

    renderContent() {
        switch (this.props.auth) {
            case '':
            case false:
                return <li><a href="/auth/google">Sign In With Google</a></li>;
            default:
                return <li><Link to="/" onClick={this.onLogoutClick}>Logout</Link></li>;
        }
    }

    onLogoutClick() {
        this.props.logoutUser();
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="left brand-logo">Secret Santa</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps, actions)(Header);