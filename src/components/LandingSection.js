import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// material-ui css-in-js
const styles = theme => ({
    type: {
        fontFamily: 'Georgia, serif',
    }
})

class LandingSection extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className='center-content pad-general margin-header content'>
                <Typography 
                    variant='h3' 
                    color='textPrimary'
                    className={classes.type}>
                    Welcome to Book Hour
                </Typography>
                <br /><br />
                <Typography 
                    variant='h5' 
                    color='textPrimary'
                    className={classes.type}>
                    This search engine was created by Kevin Hu - 
                    budding Software Engineer, fanatic reader particularly the fictional sort of book, and writer in the Asian American writing space. 
                    The database powering this search engine is the 
                    <a target="_blank" href='https://openlibrary.org/developers/api'> Open Library API</a>.
                </Typography>
                <br />
                <br />
                <Typography 
                    variant='h5' 
                    color='textPrimary'
                    className={classes.type}>
                    I created this to try to present the cleanest possible interface while allowing users the most accurate searches, 
                    while accomodating to the information offered by the Open Library API. 
                    As an avid reader, discovering books with a cluttered interface can turn us away.
                    But it does not have to be this way!
                    I hope you are able to come to find what you are looking for by using this search engine.
                </Typography>
            </div>
        )
    }
}

LandingSection.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingSection);