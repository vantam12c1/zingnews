import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import api from '../../../../api/apiService';
import GoodBook from '../../components/goodbooks';
import NewBook from '../../components/newbooks';

// okie
//ua t dinh lam style tu nhien m lam lun r 
// de t xoa roi m lam lại// thui lam bien hiih
// để t xem lại cái useEffect méo hiểu nó chạy salon
// trang detail thì làm sao lấy được cái param stephen-hawking-cau-be-me-che-tao
// sau đó fillter là ra
//okie
BookList.propTypes = {  
    
};
function BookList(props) {
    const [books, setBooks] = useState([]);   

    useEffect(() => {
        const endpoint = '/books';
        const fetchData = async () => {
            let response = await api.get(endpoint);   
            setBooks(response.data);    
            console.log(books);                            
        }
        fetchData();
    
        return () => {
            // clean up
        }
    }, [])

    return (
        <div className="bookList">         
            <GoodBook books={books}/>           
        </div>
    );
};

export default BookList;
