import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function DetailHeader({ data }) {
    const style={
        backgroundColor:'#ff00003b',
        width:'100%',
        backgroundRepeat: 'no-repeat',
       textAlign: `center`,
       borderRadius:'10px'
        
    };
    return (
        <div className="container background-header">
             <div className="detail-header">
        
            <div className="detail-header-flex clearfix">

                <div className="detail-image">
                    <img src={data.image} className="data-img" />
                </div>
                <div className="detail-text">
                    <p class="data-breadcrum">{data.breadcrumb}</p>
                    <h1 className="title">{data.album}</h1>
                    <div className="author">
                        <span class="text-author">Tác giả:</span> <span className="data-author">{data.author} / {data.nxb}</span></div>
                    <div clalssName="album-title">
                        <p className="data-album-title">{data.album_title}</p></div>
                </div>
                {/* {data.album}
        
        {data.author}
        {data.nxb}
        {data.breadcrumb} */}
            </div>
        </div>

        </div>
       
    );
};

DetailHeader.propTypes = {

};

export default DetailHeader;