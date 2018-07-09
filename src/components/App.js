import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        console.log(this.props.loading);
        return (
            <div>
                Starter Code
                {this.props.loading ? <div>Loading...</div> : <Dashboard />}
            </div>
        )
    }
}

function mapStateToProps({ authedUser}){
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App)
