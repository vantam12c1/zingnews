import React from 'react';
import PropTypes from 'prop-types';
import BookList from '../../pages/BooksList';
import BookItem from '../../components/goodbooks/bookItem';
import './style.scss';
GoodBook.propTypes = {

};

function GoodBook(props) {    
    let booksHL = props.books.filter(book => {
        return book.categories.some(val => {
            return val == 'noi-bat';
        })
    })
    booksHL = booksHL.slice(0, 4);

    return (
        <ul className="bookHL-list">
            {booksHL.map(b => 
                <BookItem key={b.id} poster={b.poster} title={b.title} subtitle={b.subtitle} slug={b.slug} />    
            )}
        </ul>
    );
}

export default GoodBook;