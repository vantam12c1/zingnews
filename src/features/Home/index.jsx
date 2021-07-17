import React from 'react';
import PropTypes from 'prop-types';
import Home from './pages/index';

// feature sẽ gọi tới file index.jsx của page
// thằng này thường sẽ cấu hình routing nếu trường hợp có route con
function HomeFeature() {
    return (
        <Home />
    );
};

HomeFeature.propTypes = {

};

export default HomeFeature;