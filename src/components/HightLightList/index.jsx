import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import HightLightItem from '../HightLightItem';

function HightLightList(props) {   
    const hightLight = props.hightLight;   
    return (
        <div className="bookHL-list">
           {hightLight.map(b => 
                <HightLightItem key={b.id} poster={b.poster} title={b.title} subtitle={b.subtitle} slug={b.slug} />
           )}
        </div>
    );
};

HightLightList.propTypes = {

};

export default HightLightList;