import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, 
         Button,
         GridList,
         GridListTile,
         GridListTileBar,
         Icon } from '@material-ui/core';
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
    // handleClick = () => {

    // }

    render() {
        const { books, search, idx } = this.props;
        const { classes } = this.props;
        
        // pagination
        const limit = 9;
        const start = idx === 1 ? idx - 1 : (idx - 1) * limit;
        const end = limit * idx;

        return (
        <div className='center-content pad-general'>
        {books.length &&
        <div>
        <div className='paginate pad-general'>
            <Button 
                disabled={idx===1 ? true : false}
                component={Link} 
                to={`/books/${search}/${idx - 1}`}>
                <Icon>arrow_left</Icon>
            </Button>
            <Button 
                disabled={end >= books.length-1 ? true : false}
                component={Link} 
                to={`/books/${search}/${idx + 1}`}>
                <Icon>arrow_right</Icon>
            </Button>
        </div>
            <GridList 
                className='center-content pad-general'
                cols={4}>
                {books.slice(start, end || books.length-1).map((each, i) => {
                            return (
                                <GridListTile 
                                    className={classes.gridList} 
                                    key={i} 
                                    cols={1}>
                                    <img src={`http://covers.openlibrary.org/b/id/${each.cover_i}-S.jpg`} />
                                    <GridListTileBar 
                                        title={each.title}
                                        subtitle={each.author_name ? 
                                            `Written by ${each.author_name[0]}` : 
                                            null}
                                        onClick={handleClick}
                                    />
                                </GridListTile>
                            )
                })}
            </GridList>
            </div>
            }
        </div>
        )
    }
}

ResultsGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ byTitle }, { idx }) => {
    return {
        books: byTitle.titles,
        search: byTitle.search,
        idx
    }
}

export default connect(mapStateToProps)(withStyles(styles)(ResultsGrid));