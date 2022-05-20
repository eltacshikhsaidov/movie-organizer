import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { removeFromList } from '../../redux/actions/listActions';
import './MovieList.css';

const MovieList = () => {

    const addedMovies = useSelector(state => state.list);
    const addedMoviesArray = [...addedMovies.movies];

    const dispatch = useDispatch();

    const showAlert = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1700,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });

        Toast.fire({
            icon: 'success',
            title: 'Movie removed from list'
        });
    }

    const handleRemove = (movie) => {
        showAlert();
        dispatch(removeFromList(movie));
    }

    return (
        <div className='movie-container'>
            <h1>Movie List ({addedMoviesArray.length})</h1>

            <div className='movie-list m'>

                {addedMoviesArray.length === 0 ? <h2>Movie list is empty</h2> : addedMoviesArray.map(movie => {
                    return (
                        <div className='movie-item' key={movie.movie.imdbID}>
                            <div className="movie-item-image">
                                <img src={movie.movie.Poster} alt="Movie Item" />
                            </div>
                            <div className="movie-item-info">
                                <div className="first-block">
                                    <h2>{movie.movie.Title}</h2>
                                    <button className='remove' onClick={() => handleRemove(movie.movie)}>X</button>
                                </div>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quod minus reprehenderit commodi nisi tempora quia autem aperiam dolore. Impedit maiores quo nobis eius nemo necessitatibus architecto, ad aliquam modi!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dicta, quaerat, nisi sed voluptates quae sapiente delectus natus veniam quisquam commodi ipsa magnam iure voluptatum autem? Repellendus, necessitatibus voluptatum? Labore?
                                </p>
                                <p>Year: {movie.movie.Year}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default MovieList;