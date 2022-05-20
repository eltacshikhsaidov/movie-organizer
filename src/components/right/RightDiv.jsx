import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { removeFromList } from '../../redux/actions/listActions';
import './RightDiv.css';

const RightDiv = () => {

    const movies = useSelector(state=>state.list);
    

    const movieArray = [...movies.movies];

    console.log(movieArray);

    movieArray.map(movie => {
        console.log(movie)
    })

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


    const showSuccessOnListCreate = () => {
         
        let timerInterval

        Swal.fire({
            title: 'List created successfully',
            html: 'I will close in <b></b> milliseconds.',
            timer: 1500,
            icon: 'success',
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
            }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })
    }

    const handleCreateListButton = () => {
        showSuccessOnListCreate();
    }


    return (
        <div className='right'>

            <div className='list-group'>
                <div className='list-name'>
                    <h2>Create list and share with others :)</h2>
                </div>
                <div className="list-name-bar">
                    
                </div>
            </div>

            <div className='movie-list'>
            {movieArray === undefined ? <p>No movie available</p> : movieArray.map((movie) => {
                    return (
                        <div key={movie.movie.imdbID}>
                            <div className='movie-card-in-list'>
                                <div className="card-image">
                                    <img src={movie.movie.Poster} alt={movie.movie.Title} />
                                </div>
                                <div className="card-text">
                                    <div className="card-title">
                                        <h1>{movie.movie.Title}</h1>
                                    </div>
                                    <div className="card-id">
                                        <p>Movie ID: {movie.movie.imdbID}</p>
                                    </div>
                                    <div className="card-year">
                                        <p>Year: {movie.movie.Year}</p>
                                    </div>

                                    <button onClick={() => handleRemove(movie.movie)} className='remove-button remove-submit'>Remove</button>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            </div>


            <div className="create-list-button">
                <button onClick={() => handleCreateListButton()} className='button search-submit'>Create list</button>
            </div>
        </div>
    );
}

export default RightDiv;