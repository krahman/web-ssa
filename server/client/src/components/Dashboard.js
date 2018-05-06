import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Dashboard extends Component {

    renderContent(){

        const secretSantaList = this.props.secretSanta;

        if (secretSantaList.length > 0) {
            return (
                <div>
                    <h3>Your Secret Santa List:</h3>
                    <ul>
                        {secretSantaList.forEach(item => {
                            return <li>{item.name}</li>;
                        })}
                    </ul>
                </div>
            );
        } else {
            return (
                <div style={{textAlign: 'center'}}>
                    <h3>No Secret Santa has been found.</h3>
                    <div>
                        <Link to="/secret-santas/new">Create new Secret Santa</Link>
                    </div>
                </div>
            );

        }
    }

    componentDidMount() {
        this.props.fetchSecretSantaList();
    }

    render() {
        return(
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

function mapStateToProps({secretSanta}) {
    return {secretSanta};
}

export default connect(mapStateToProps, actions)(Dashboard);