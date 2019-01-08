import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import SideNav from './SideNav';
import ResultsGrid from './ResultsGrid';
import LandingSection from './LandingSection';

class App extends Component {

    render() {
        const { byTitle } = this.props;
        return (
            <Fragment>
                <Header />
                <div className={`center-content ${'landing'} pad-top`}>
                    <SideNav />
                    <ResultsGrid />
                    { !byTitle.length &&
                    <LandingSection />}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ byTitle }) => {
    return {
        byTitle
    }
}

export default connect(mapStateToProps)(App);