import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

class App extends Component {
    render (){

        return (
            <div>
                <Typography 
                    variant='h1' 
                    color='textPrimary'
                    style={{ fontFamily: 'Georgia, serif'}}>
                    boo<font color='blue'>KH</font>ook search engine
                </Typography>
            </div>
        )
    }
}

export default App;