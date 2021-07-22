import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function DetailContent({data}) {    
    const style={
        backgroundImage:`url(https://static-znews.zadn.vn/images/bgbook.png)`,

    }
    return (
        <div className="detail-content" style={style}>    
            <h1 className="title-content">{data.title}</h1>
            <div className="text-subtitle">
            <p className="subtitle-content">{data.subtitle}</p>
            </div>
            
            <div dangerouslySetInnerHTML={{__html: data.desc}}></div>
        </div>
    );
};

DetailContent.propTypes = {

};

export default DetailContent;