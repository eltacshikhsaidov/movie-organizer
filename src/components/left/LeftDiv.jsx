import React, { useEffect, useState } from 'react'
import MovieCard from '../moviecard/MovieCard';
import './LeftDiv.css';

const LeftDiv = () => {

    const [input, setInput] = useState('');
    const [movieData, setMovieData] = useState([]);

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(movieData === undefined ? 'no data' : 'data available');
    }

    const changeHandler = (event) => {
        event.preventDefault();
        setInput(event.target.value);
    }

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://www.omdbapi.com/?apikey=6816cac0&s=' + input);
            const data = await response.json();
            setMovieData(data.Search);
        }
        getData();
    });

    return (
        <div className='left'>
            <div className='search-group'>

                <form onSubmit={submitHandler}>
                    <input onChange={changeHandler} type='text' placeholder='Search movie by its title' className='search-bar' />
                    {/* <input type="submit" className="search-submit button" value="Search" onClick={submitHandler} /> */}
                </form>

                <div className='movie-list'>
                    {movieData === undefined ? <p>No movie available</p> : movieData.map((movie) => {
                            return (
                                <div key={movie.imdbID}>
                                    <MovieCard 
                                        movie={movie}
                                    />
                                </div>
                            );
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default LeftDiv;