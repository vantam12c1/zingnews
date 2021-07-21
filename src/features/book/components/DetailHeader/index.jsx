import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function DetailHeader({data}) {    
    return (
        <div className="detail-header">    
            <img src={data.image} /> 
            {data.title}
            {data.album}
            {data.album_title}
            {data.author}
            {data.nxb}
            {data.breadcrumb}
        </div>
    );
};

DetailHeader.propTypes = {

};

export default DetailHeader;