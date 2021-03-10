import React, {useEffect} from 'react';
import { Layout } from 'antd';
import { Switch, Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {getMovies} from '../actions/movies';
import HomePage from './HomePage';
import MoviePage from './MoviePage';

export const MainContainer =  () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

    return (
        <Layout.Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/movie/:id' component={MoviePage} />
          </Switch>
        </Layout.Content>
    );
}
