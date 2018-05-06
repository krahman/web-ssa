import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Landing extends Component {

    renderContent() {
        if (this.props.auth) {
            return <div><Link to="/secret-santas">Click here</Link> to view your created Secret Santa.</div>
        }
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h3>Welcome to Secret Santa!</h3>
                {this.renderContent()}
            </div>
        );
    }
}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(Landing);