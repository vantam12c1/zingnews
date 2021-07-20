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
// rooif
// khi nó vào book/list sẽ điều hướng về book
// còn cái lỗi ul li gì gì đó là tại ở header có mấy cái lilinddeeer javascript:void(0) thằng react k chịu 
// kệ nó chạy cũng được
//okie, nào ko bít t hỏi tiêp
BookFeature.propTypes = {

};

export default BookFeature;