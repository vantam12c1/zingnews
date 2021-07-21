import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import api from '../../../../api/apiService';
import HightLightList from '../../../../components/HightLightList';

BookList.propTypes = {  
    
};
function BookList(props) {
    const [books, setBooks] = useState([]);   
    const [booksHightLight, setBooksHightLight] = useState([]);

    useEffect(() => {
        const endpoint = '/books';
        const fetchData = async () => {
            let response = await api.get(endpoint);   
            let booksHL = response.data.filter(book => {
                return book.categories.some(val => val === 'noi-bat')
            })
            booksHL = booksHL.slice(0, 4);            
            setBooks(response.data);      
            setBooksHightLight(booksHL);                             
        }
        fetchData();
    
        return () => {
            // clean up
        }
    }, [])

    return (
        <div className="book">     
            <h2 className="book__title">SÁCH HAY</h2>    
            <HightLightList hightLight={booksHightLight} />
        </div>
    );
};

export default BookList;
