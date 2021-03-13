import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Input, Select } from 'antd';

import { MoviePreview } from './MoviePreview';

const { Option } = Select;

const HomePage = () => {
    const movies = useSelector((state) => state.movies);
    const genres = useSelector((state) => state.genres);
    const [filteredMovies, setFilteredMovies] = useState(movies);
    const [searchValue, setSearchValue] = useState ('');
    const [chosenGenre, setGenre] = useState('');

    const handleChange = (event) => {
        setSearchValue(event.target.value.toLowerCase());
    };

    useEffect (() => {
        if (searchValue && !chosenGenre) {
            setFilteredMovies(
                movies.filter(
                    (item) => item.title.toLowerCase().includes(searchValue)
                )
            );
        } else if (!searchValue && chosenGenre) {
            const result = movies.filter((item) => {
                return item.genre && item.genre.some((elem) => {
                    return elem && elem.trim() === chosenGenre;
                });
            });
            setFilteredMovies(result);
        } else if (searchValue && chosenGenre) {
            const result = movies.filter((item) => {
                const includesTitle = item.title.toLowerCase().includes(searchValue);
                const includesGenre = item.genre && item.genre.some((elem) => {
                    return elem && elem.trim() === chosenGenre;
            });

            return includesTitle && includesGenre;
        });
        setFilteredMovies(result);
        } else {
            setFilteredMovies(movies);
        }
    }, [searchValue, movies, chosenGenre]);

    const handleSelectChange = (value) => {
        setGenre(value);
    };

    const handleSelectClear = () => {
        setGenre('');
    };

    return (
        <> 
        <div className='filter'>
                <Input
                placeholder='Search movie...'
                onChange={handleChange}
                />
                <Select
                    onChange={handleSelectChange}
                    allowClear
                    onClear={handleSelectClear}
                    >
                        {genres.map((item)=> (
                            <Option key ={item} value={item}>{item}</Option>
                        ))}
                    </Select>
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