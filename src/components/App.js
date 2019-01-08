import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import SideNav from './SideNav';
import ResultsGrid from './ResultsGrid';
import LandingSection from './LandingSection';
import SingleBookView from './SingleBookView';

class App extends Component {

    render() {
        const { books } = this.props;
        const renderBooksByPage = ({ match, history }) => {
            const idx = match.params.index * 1;
            return <ResultsGrid idx={idx} history={history}/>;
        };
        return (
            <Router>
                <Fragment>
                    <Header />
                    <div className='center-content landing pad-top'>
                        <SideNav history={history}/>
                        {!books.length &&
                        <LandingSection />}
                        <Route
                            exact path="/books/:book?/:index?"
                            render={renderBooksByPage}
                        />
                        <Route 
                            exact path="/profile/:book?"
                            component={SingleBookView}
                        />
                    </div>
                </Fragment>
            </Router>
        )
    }
}

const mapStateToProps = ({ byTitle }) => {
    return {
        books: byTitle.titles
    }
}

export default connect(mapStateToProps)(App);