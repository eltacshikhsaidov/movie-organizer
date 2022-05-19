import React from 'react';
import Swal from 'sweetalert2';

const MovieCard = ({title, poster, year, imdbID}) => {

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
            title: 'Movie added to your list'
        });
    }

    const handleAddMovie = (imdbID) => {
        showAlert();
        console.log('Movie with id ' + imdbID + ' added to your list');
    }

    return (
        <div className='movie-card'>
            <div className='movie-card-image'>
                <img src={poster} alt='movie poster' />
            </div>
            <div className="movie-text">
                <div className='movie-card-title'>
                    <h3>{title}</h3>
                </div>
                <div className="movie-id">
                    <p>imdbID: {imdbID}</p>
                </div>
                <div className='movie-card-year'>
                    <p>Year: {year}</p>
                </div>
                <button className='search-submit button' onClick={() => handleAddMovie(imdbID)}>Add to List</button>
            </div>
        </div>
    );
}

export default MovieCard;