import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { TextField, Button, Paper, Icon, Select } from '@material-ui/core';
import { connect } from 'react-redux';
import { _getBooksByTitle } from '../store/bksByTitle';

const styles = theme => ({
    toolbar: {
      padding: '2%',
      margin: '0% 10% 0% 10%',
      backgroundColor: '#567D9C',
      display: 'flex',
      justifyContent: 'center'
    },
    searchbar: {
        backgroundColor: 'white',
        width: 275,
    },
    select: {
        height: 35
    }
});

class SideNav extends Component {
    state = {
        search: '',
        category: ''
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const { _getBooksByTitle, history } = this.props;
        let { search, category } = this.state;
        search = search.includes(' ') ? search.replace(' ', '+') : search;
        console.log(search)
        _getBooksByTitle(search, category).then(() => {
            history.push(`/books/${search}/1`)
        })
    }

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    render (){
        const { handleChange, handleSubmit } = this;
        const { classes, history } = this.props;
        return (
            <Paper className={classes.toolbar}>
            <form onSubmit={handleSubmit}>
                <TextField 
                    className={classes.searchbar}
                    name='search'
                    onChange={handleChange} />
                <select 
                    name='category' 
                    className={classes.select}
                    onChange={handleChange}>
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

const mapStateToProps = (state, { history }) => {
console.log(history)
return {
    history
}
}

const mapDispatchToProps = dispatch => {
    return {
        _getBooksByTitle: (search, category) => dispatch(_getBooksByTitle(search, category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(SideNav)));
