import React, { useEffect, useState } from 'react'
import './ActionPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import {Link} from 'react-router-dom';
import axios from 'axios'
const ActionPage = () => {
    const [at,setAtMovies] = useState([])
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=992e91e1f851cd7691a7432786eaf18c&language=en-US&query=action&page=1&include_adult=false`).then((response)=>{
             setAtMovies(response.data.results);
        })
    },[])
    return (
    <div className='At_wrapper'>
        <Navbar></Navbar>
        <div className='At_container'>
            <div className='At_movies'>
                {at.map((item,id) => (
                     <Link to={`/movie/${item?.id}`} style={{ textDecoration: 'none' }}>
                    <div className='At_movie'>
                      <img  className="At_Poster"src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title}></img>
                      <div className='At_title'>
                          {item.title}
                      </div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ActionPage