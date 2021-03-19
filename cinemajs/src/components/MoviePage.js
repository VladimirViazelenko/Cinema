import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Poster } from './Poster';
import { InfoBlock } from './InfoBlock';

const MoviePage = () => {
    const movies = useSelector((s) => s.movies);
    const { id } = useParams();
    const movie = useMemo(() => {
        return movies.find((item) => item.id === +id);
    }, [id, movies]);
    console.log('movie', movie);
    return (
        <div className='movie-page'>
            <h1>{movie.title}</h1>
            <div className = 'movie-info'>
                <Poster posterUrl={movie.poster}/>
                <div>
                    <InfoBlock
                        title="Actors:"
                        content={movie.actors.join(", " )}
                    />
                    <InfoBlock
                        title="Genre:"
                        content={movie.genre.join(", " )}
                    />
                    <InfoBlock
                        title="Country:"
                        content={movie.country.join(", " )}
                    />
                    <InfoBlock
                        title="Language:"
                        content={movie.language}
                    />
                    <InfoBlock
                        title="Age:"
                        content={movie.age ? `${movie.age}+`: 'No age restrictions'}
                    />
                    <InfoBlock
                        title="Description:"
                        content={movie.description}
                    />
                    <InfoBlock
                        title="Trailer:"
                        content={
                            <iframe
                                width='100%'
                                height='400px'
                                src={movie.trailer}
                                allowFullScreen
                            />
                        }
                    />
                </div>
            </div>
        </div>
    )
};

export default MoviePage;