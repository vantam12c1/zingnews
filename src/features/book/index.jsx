import React from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookList from './pages/BooksList';
import BookDetail from './pages/BooksDetail';

function BookFeature() {
    const path = useRouteMatch().path;
    return (
        <>
            <Switch>
                <Redirect from={`${path}/list`} to={path}></Redirect>
                <Route path={path} component={BookList} exact />
                <Route path={`${path}/:slug`} component={BookDetail} exact />    
            </Switch>   
        </>
    );
};

BookFeature.propTypes = {

};

export default BookFeature;