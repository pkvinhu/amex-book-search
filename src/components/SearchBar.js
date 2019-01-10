import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { TextField, Button, Paper, Icon, Select } from '@material-ui/core';
import { connect } from 'react-redux';
import { _getBooks } from '../store/bks';

// material-ui css-in-js styles
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

class SearchBar extends Component {
    state = {
        search: '',
        category: ''
    }

    // handle form submission
    handleSubmit = (evt) => {
        evt.preventDefault();
        const { _getBooks, history } = this.props;
        let { search, category } = this.state;
        
        // ternary operator revises search input to compatible params syntax
        search = search.includes(' ') ? search.replace(' ', '+') : search;

        // make ajax call and take us to the first page of results
        _getBooks(search, category).then(() => {
            history.push(`/books/${search}/1`)
        })
    }

    // handle textfield change
    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    render (){
        const { handleChange, handleSubmit } = this;

        // classes prop is required when using material-ui proptypes object
        const { classes } = this.props;
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

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state, { history }) => ({ history })

const mapDispatchToProps = dispatch => ({
        _getBooks: (search, category) => dispatch(_getBooks(search, category))
})

// wrap component in both redux-thunk mapping functions and material-ui withStyles
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(SearchBar)));
