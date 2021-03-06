import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import SearchBar from './SearchBar';
import ResultsGrid from './ResultsGrid';
import LandingSection from './LandingSection';
import SingleBookView from './SingleBookView';

class App extends Component {

    render() {
        // checking books array length to see if a search has already been made - display landing section otherwise
        const { books, search } = this.props;
        
        // renders component with the url params idx and history prop for pagination
        const renderBooksByPage = ({ match, history }) => {
            const idx = match.params.index * 1;
            return <ResultsGrid idx={idx} history={history}/>;
        };

        return (
            <Router>
                <Fragment>
                    <Header />
                    <div className='wrap'>
                    <div className='center-content landing pad-general'>
                        <SearchBar history={history}/>
                        {!books.length && !search &&
                        <LandingSection />}
                        <Route
                            exact path="/books/:book?/:index?"
                            render={renderBooksByPage}
                        />
                    </div>
                    </div>
                </Fragment>
            </Router>
        )
    }
}

const mapStateToProps = ({ booksFound }) => ({
        books: booksFound.titles,
        search: booksFound.search
})

export default connect(mapStateToProps)(App);