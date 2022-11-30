import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Main from '../../Components/Main/Main'
import Row from '../../Components/Row/Row'
import './Home.css'
const Home = () => {
  return (
    <div className='Home_container'>
     <Navbar></Navbar>
     <Main></Main>
     <div><h3>Up coming</h3></div>
      <Row fetchURL={`https://api.themoviedb.org/3/movie/upcoming?api_key=992e91e1f851cd7691a7432786eaf18c&language=en-US&page=1`}></Row>
      <div><h3>Trending</h3></div>
      <Row fetchURL={`https://api.themoviedb.org/3/movie/popular?api_key=992e91e1f851cd7691a7432786eaf18c&language=en-US&page=2`}/>
      <div><h3>Top rated</h3></div>
      <Row fetchURL={`https://api.themoviedb.org/3/movie/top_rated?api_key=992e91e1f851cd7691a7432786eaf18c&language=en-US&page=1`}></Row>
      <div><h3>Now playing</h3></div>
      <Row fetchURL={`https://api.themoviedb.org/3/movie/now_playing?api_key=992e91e1f851cd7691a7432786eaf18c&language=en-US&page=1`}></Row>
    </div>
    
  )
}

export default Home