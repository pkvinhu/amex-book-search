import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog, Card, CardContent, CardMedia, Typography, Divider } from '@material-ui/core';

class SingleBookView extends Component {
    state={
        open: this.props.open
    }

    render() {
        const { book } = this.props;
        const { open } = this.state;
        return (
            <Dialog
                open={open}>
                <Card
                    style={{ display: 'flex', width: 'auto' }}>
                    <CardMedia
                        component="img"
                        alt="book"
                        style={{ objectFit: 'cover', height: 400, width: '50%' }}
                        image={`http://covers.openlibrary.org/b/${`id/${book.cover_i}` || `goodreads/${book.id_goodreads}`}-L.jpg`}
                        title={book.title}
                    />
                    <CardContent
                        style={{ width: '50%', overflowWrap: 'break-word' }}>
                        <Typography variant='h6'><strong>Title:</strong> {book.title}</Typography>
                        <Divider />
                        <Typography variant='h6'><strong>Author:</strong> {book.author_name[0]}</Typography>
                        <Divider />
                        <Typography variant='h6'><strong>Published Date:</strong> {book.publish_date[0]}</Typography>
                        <Divider />
                        <Typography variant='h6'><strong>Published Year:</strong> {book.publish_year[0]}</Typography>
                        <Divider />
                        <Typography variant='h6'><strong>Publisher:</strong> {book.publisher.slice(0, 3 || book.publisher.length-1).join(', ')}</Typography>
                        <Divider />
                    </CardContent>
                </Card>
            </Dialog>
        )
    }
}

const mapStateToProps = ({ booksFound }, { idx, open }) => {
    const book = booksFound.titles[idx];
    console.log('This is the book: ', book)
    return {
        book,
        open
    }
}

export default connect(mapStateToProps)(SingleBookView);