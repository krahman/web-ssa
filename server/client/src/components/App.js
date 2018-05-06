import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Header from './Header';

const Landing = () => <h2>Landing</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SantasNew = () => <h2>New Santas</h2>;

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
                        <Route exact={true} path="/santas" component={Dashboard}/>
                        <Route path="/santas/new" component={SantasNew}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);