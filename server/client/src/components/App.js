import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SecretSantasNew from './secretSantas/SecretSantasNew';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render(){
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact={true} path="/" component={Landing}/>
                        <Route exact={true} path="/secret-santas" component={Dashboard}/>
                        <Route path="/secret-santas/new" component={SecretSantasNew}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);