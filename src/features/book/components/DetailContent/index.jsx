import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function DetailContent({data}) {    
    return (
        <div className="detail-content">    
            <h1>{data.title}</h1>
            {data.subtitle}
            <div dangerouslySetInnerHTML={{__html: data.desc}}></div>
        </div>
    );
};

DetailContent.propTypes = {

};

export default DetailContent;