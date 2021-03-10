import {Link} from 'react-router-dom';

export const MoviePreview = ({movie}) => {
    return (
        <Link to={`/movie/${movie.id}`}>
            <img src={movie.poster}alt='poster for movie'/>
            <div className='movie-title'>{movie.title}</div>
        </Link>
    )
}

