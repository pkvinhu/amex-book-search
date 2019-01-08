import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, 
         Button,
         GridList,
         GridListTile,
         GridListTileBar } from '@material-ui/core';
import { connect } from 'react-redux';

const styles = theme => ({
    grid: {
      padding: '15%',
    },
    gridList: {
      width: 500,
      height: 550,
      margin: '4px',
    },
});

class ResultsGrid extends Component {

    render() {
        const { byTitle } = this.props;
        const { classes } = this.props;
        return (
        <div className='center-content pad-general'>
            <GridList 
                className='center-content'
                cols={4}>
                {byTitle.map((each, idx) => {
                    console.log(each)
                            return (
                                <GridListTile className={classes.gridList}  key={idx} cols={1}>
                                    <img src={`http://covers.openlibrary.org/b/id/${each.cover_i}-S.jpg`} />
                                    <GridListTileBar 
                                        title={each.title}
                                        subtitle={each.author_name ? `Written by ${each.author_name[0]}` : null}/>
                                </GridListTile>
                            )
                })}
            </GridList>
        </div>
        )
    }
}

ResultsGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ byTitle }) => {
    return {
        byTitle
    }
}

export default connect(mapStateToProps)(withStyles(styles)(ResultsGrid));