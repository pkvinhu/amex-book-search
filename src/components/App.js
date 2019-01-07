import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import SideNav from './SideNav';
import ResultsGrid from './ResultsGrid';

class App extends Component {

    render() {
        const { byTitle } = this.props;
        return (
            <div>
                <Header />
                <div className='border-box center-content'>
                    <SideNav />
                    <ResultsGrid />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ byTitle }) => {
    return {
        byTitle
    }
}

export default connect(mapStateToProps)(App);