import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import './style.scss';

function HightLightItem({poster, title, subtitle, slug}) {
    const path = useRouteMatch().path;    

    return (
        <div className="bookHL-item">
            <div className="flex">
                <div className="poster">
                    <Link to={`${path}/${slug}`}>  <img src={poster}  /> </Link>
                </div>
                <div className="info">
                    <div className="title"><Link to={`${path}/${slug}`}>{title}</Link></div>
                    <div className="subtitle">{subtitle}</div>
                </div>                
            </div>
        </div>    
    );
};

HightLightItem.propTypes = {

};

export default HightLightItem;