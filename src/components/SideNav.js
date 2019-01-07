import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { _getBooksByTitle } from '../store/bksByTitle';

class SideNav extends Component {
    state = {
        search: ''
    }

    handleClick = (evt) => {
        const { _getBooksByTitle } = this.props;
        const { search } = this.state;
        _getBooksByTitle(search)
    }

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    render (){
        const { handleClick, handleChange } = this;
        return (
            <div className='flex center-content margin-header pad-general'>
                <TextField 
                    className='center-content'
                    name='search'
                    onChange={handleChange} />
                <Button onClick={handleClick}>Search</Button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _getBooksByTitle: input => dispatch(_getBooksByTitle(input))
    }
}

export default connect(null, mapDispatchToProps)(SideNav);
