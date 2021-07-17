import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import api from '../../../api/apiService';

function Home(props) {

    useEffect(() => {
        const endpoint = '/tests';
        const fetchData = async () => {
            let response = await api.get(endpoint);   
            console.log(response.data);         
        }

        fetchData();
        return () => {
            // clean up
        }
    }, [])

    return (
        <div className="home">
            this is home
        </div>
    );
};

Home.propTypes = {

};

export default Home;