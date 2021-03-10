import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Input } from 'antd';

import { MoviePreview } from './MoviePreview';

const HomePage = () => {
    const movies = useSelector((state) => state.movies);
    const [filteredMovies, setFilteredMovies] = useState(movies);
    const [searchValue, setSearchValue] = useState ('');

    const handleChange = (event) => {
        setSearchValue(event.target.value.toLowerCase());
    };

    useEffect (() => {
        if (searchValue) {
            setFilteredMovies(
                movies.filter(
                    (item) => item.title.toLowerCase().includes(searchValue)
                )
            )
        } else {
            setFilteredMovies(movies);
        }
    }, [searchValue])

    return (
        <> 
        <div className='filter'>
                <Input
                placeholder='Search movie...'
                onChange={handleChange}
                />
            </div>
        <div className = 'movie-list'>
            {
                filteredMovies.map((item) => (
                    <MoviePreview key={item.id} movie={item}/>
                ))
            }
        </div>
        </>
    );
};

export default HomePage;