import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';
import api from '../../../../api/apiService';

function BookDetail(props) {
    const path = useRouteMatch().path;
    const [details, setDetails] = useState([]);   
    console.log(useRouteMatch())
    useEffect(() => {
       
        const endpoint = '/books';
        const fetchData = async () => {
            let response = await api.get(endpoint);   
            setDetails(response.data);    
                                     
        }
        fetchData();
    
        return () => {
            // clean up
        }
    }, [])
 

    return (
       
        <div className="bookDetail">         
           {details.map(val => {
               return (
                   <div dangerouslySetInnerHTML={{__html:val.desc}}></div>
                   )
           })}
              
        </div>
    );
};

BookDetail.propTypes = {

};

export default BookDetail;