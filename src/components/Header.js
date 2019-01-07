import React, { Component } from 'react';
import { Typography, Icon, Paper } from '@material-ui/core';

class Header extends Component {

    render (){
        return (
            <div className='flex margin-header pad-general space-btw'>
                <Paper className='center-content border-box icon-pad'>
                <Icon>local_library</Icon><Icon>hourglass_full</Icon>
                <Typography 
                    variant='subtitle1' 
                    color='textPrimary'
                    style={{ fontFamily: 'Georgia, serif'}}>
                    B<font color='#567D9C'>KH</font>R
                </Typography></Paper>
                <Typography 
                    variant='h2' 
                    color='textPrimary'
                    style={{ fontFamily: 'Georgia, serif' }}>
                    BOO<font color='#567D9C'>KH</font>OUR SEARCH
                </Typography>
            </div>
        )
    }
}

export default Header;