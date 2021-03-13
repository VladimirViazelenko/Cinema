import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const MoviePage = () => {
    const movies = useSelector((s) => s.movies);
    const { id } = useParams();
    const movie = useMemo(() => {
        return movies.find((item) => item.id === +id);
    }, [id, movies])
    console.log('movie', movie);
    return (
        <h3>MoviePage</h3>
    )
};

export default MoviePage;