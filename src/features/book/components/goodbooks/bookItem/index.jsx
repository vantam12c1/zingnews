import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

BookItem.propTypes = {
    books: PropTypes.object,    
};

function BookItem({poster, title, subtitle, slug}) {   
    const path = useRouteMatch().path;

    return (
        <div className="bookHL-item">
            <div className="flex">
                <div className="poster">
                    <img src={poster} />
                </div>
                <div className="info">
                    <div className="title"><Link to={`${path}/${slug}`}>{title}</Link></div>
                    <div className="subtitle">{subtitle}</div>
                </div>                
            </div>
        </div>    
    );
}

export default BookItem;