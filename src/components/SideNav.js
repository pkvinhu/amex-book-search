import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Button, Paper, Icon } from '@material-ui/core';
import { connect } from 'react-redux';
import { _getBooksByTitle } from '../store/bksByTitle';

const styles = theme => ({
    toolbar: {
      padding: '2%',
      margin: '0% 10% 0% 10%',
      backgroundColor: '#567D9C',
      display: 'flex',
      justifyContent: 'flex-end'
    },
    searchbar: {
        backgroundColor: 'white',
        width: 275,
    }
});

class SideNav extends Component {
    state = {
        search: '',
        category: ''
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const { _getBooksByTitle } = this.props;
        const { search, category } = this.state;
        console.log('Search: ', search)
        console.log('Category: ', category)
        _getBooksByTitle(search, category)
    }

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    render (){
        const { handleChange, handleSubmit } = this;
        const { classes } = this.props;
        return (
            <Paper className={classes.toolbar}>
            <form onSubmit={handleSubmit}>
                <TextField 
                    className={classes.searchbar}
                    name='search'
                    onChange={handleChange} />
                <select name='category' onChange={handleChange}>
                    <option value='q'>All</option>
                    <option value='title'>Title</option>
                    <option value='author'>Author</option>
                </select>
                <Button type='submit'><Icon>search</Icon></Button>
            </form>
            </Paper>
        )
    }
}

SideNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => {
    return {
        _getBooksByTitle: (search, category) => dispatch(_getBooksByTitle(search, category))
    }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(SideNav));
