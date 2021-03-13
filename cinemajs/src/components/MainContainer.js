import React, { useEffect } from 'react';
import { Layout, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Switch, Route} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../actions/movies';
import HomePage from './HomePage';
import MoviePage from './MoviePage';

const spinner = <LoadingOutlined spin style={{ fontSize: '92px'}} />;

export const MainContainer =  () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((s) => s.isLoading);

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
          {
            isLoading ? (
              <div className='spinner-wrapper'>
                <Spin indicator={spinner}/>
              </div>
            ) : (
              <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/movie/:id' component={MoviePage} />
              </Switch>
            )
          }
        </Layout.Content>
    );
}
