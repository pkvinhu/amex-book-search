import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Dialog, Card, CardContent, CardMedia, Typography, Divider } from '@material-ui/core';
import { isNull } from 'util';

// material-ui css-in-js styles
const styles = theme => ({
    card: {
        display: 'flex', 
        width: 'auto'
    },
    cardContent: {
        width: '50%', 
        overflowWrap: 'break-word'
    }
});

class SingleBookView extends Component {
    render() {
        const { book, open, classes } = this.props;
        return (
            <Dialog
                open={open}>
                <Card
                    className={classes.card}>
                    <CardMedia
                        component="img"
                        alt="book"
                        style={{ objectFit: 'cover', height: 400, width: '50%' }}
                        image={`http://covers.openlibrary.org/b/${`id/${book.cover_i}` || `goodreads/${book.id_goodreads}`}-L.jpg`}
                        title={book.title}
                    />
                    <CardContent
                        className={classes.cardContent}>
                        <Typography variant='h6'><strong>Title:</strong> {book.title}</Typography>
                        <Divider />
                        <Typography variant='h6'><strong>Author:</strong> {book.author_name[0] || null}</Typography>
                        <Divider />
                        <Typography variant='h6'><strong>Published Date:</strong> {book.publish_date[0] || null}</Typography>
                        <Divider />
                        <Typography variant='h6'><strong>Published Year:</strong> {book.publish_year[0] || null}</Typography>
                        <Divider />
                        <Typography variant='h6'><strong>Publisher:</strong> {book.publisher.slice(0, 3 || book.publisher.length-1).join(', ')}</Typography>
                        <Divider />
                    </CardContent>
                </Card>
            </Dialog>
        )
    }
}

SingleBookView.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ booksFound }, { idx, open }) => {
    const book = booksFound.titles[idx];
    return {
        book,
        open
    }
}

export default connect(mapStateToProps)(withStyles(styles)(SingleBookView));