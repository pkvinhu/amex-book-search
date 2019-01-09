import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';

class SingleBookView extends Component {

    render() {
        const { book, open } = this.props;
        return (
            <Dialog
                fullScreen={fullScreen}
                open={open}>
                <DialogTitle>{book.title}</DialogTitle>
            </Dialog>
        )
    }
}

const mapStateToProps = ({ booksFound }, { idx, open }) => {
    const book = booksFound.books[idx];
    return {
        book,
        open
    }
}

export default connect(mapStateToProps)(SingleBookView);