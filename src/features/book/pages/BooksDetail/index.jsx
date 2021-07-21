import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';
import api from '../../../../api/apiService';
import DetailHeader from '../../components/DetailHeader';
import DetailContent from '../../components/DetailContent';

function BookDetail(props) {
    const [book, setBook] = useState({});
    const params = useRouteMatch().params.slug;

    useEffect(() => {       
        const endpoint = '/books';
        const fetchData = async () => {
            let response = await api.get(endpoint);   
            let bookFilter = response.data.find(b => b.slug == params);
            setBook(bookFilter)       
        }
        fetchData();
    
        return () => {
            // clean up
        }
    }, [])
 

    return (
        <div className="book-detail">         
            <DetailHeader data={book} />
            <DetailContent data={book} />
        </div>
    );
};

BookDetail.propTypes = {

};

export default BookDetail;