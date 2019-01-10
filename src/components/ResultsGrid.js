import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, 
         Button,
         GridList,
         GridListTile,
         GridListTileBar,
         Icon,
         ClickAwayListener } from '@material-ui/core';
import { connect } from 'react-redux';
import SingleBookView from './SingleBookView';

// material-ui css-in-js styles
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
    state = {
        selected: 0,
        open: false
    }

    // open function that determines whether or not a grid tile has been clicked to open the individual book modals
    handleClickOpen = (index) => {
        this.setState({ selected: index, open: true })
    }

    handleClickAway = () => {
        this.setState({ open: false })
    }

    render() {
        const { books, search, idx, classes } = this.props;
        const { selected } = this.state;
        const { handleClickOpen, handleClickAway } = this;
        
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
                            disabled={idx === 1 ? true : false}
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
                        {books
                            .slice(start, end || books.length-1)
                            .map((each, i) => {
                                console.log(each.isbn)
                            return (
                                <GridListTile 
                                    className={classes.gridList} 
                                    key={i} 
                                    cols={1}
                                    onClick={()=>handleClickOpen(i+((idx-1)*limit))}>
                                    <img src={`http://covers.openlibrary.org/b/${`id/${each.cover_i}` || `goodreads/${each.id_goodreads}`}-L.jpg`} />
                                    <GridListTileBar 
                                        title={each.title}
                                        subtitle={each.author_name ? 
                                            `Written by ${each.author_name[0]}` : 
                                            null}/>
                                </GridListTile>
                            )
                        })}
                    </GridList>
                    <ClickAwayListener onClickAway={handleClickAway}>
                        <div>
                        {this.state.open ? <SingleBookView open={this.state.open} idx={selected} /> : null}
                        </div>
                    </ClickAwayListener>
                </div>
                }
            </div>
        )
    }
}

ResultsGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ booksFound }, { idx }) => ({
        books: booksFound.titles,
        search: booksFound.search,
        idx
})

// wrap component in both redux-thunk mapping functions and material-ui withStyles
export default connect(mapStateToProps)(withStyles(styles)(ResultsGrid));