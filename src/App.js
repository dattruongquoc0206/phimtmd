import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home/Home';
import MovieDetailPage from './Pages/MovieDetailPage/MovieDetailPage';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import HorrorPage from './Pages/HorrorPage/HorrorPage';
import ActionPage from './Pages/ActionPage/ActionPage';
import SearchMovies from './Pages/SearchMoviesPage/SearchMoviesPage';
import ComedyPage from './Pages/ComedyPage/ComedyPage';
function App() {
  return (
    <div className='App'>
      <div>
      <marquee class="blink" scrollamount="12" hspace="250" vspace="10">Phimtmd là một nền tảng xem phim trực tuyến được thực hiện bởi các thành viên Trương Quốc Đạt - Huỳnh Tuấn Minh - Trần Đức Trí. 
        Bạn đang xem phim tại phimtmd.twelfthywn.space
      </marquee>
    </div>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route path="movie/:id" element={<MovieDetailPage/>}></Route>
      <Route path="/horrormovie" element={<HorrorPage/>}></Route>
      <Route path="/actionmovie" element={<ActionPage/>}></Route>
      <Route path="/searchmovie" element={<SearchMovies/>}></Route>
      <Route path="/comedymovie" element={<ComedyPage/>}></Route>
      <Route path ="/signin" element={<SignIn/>}></Route>
    </Routes>
    <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <footer class="footer">
     <div class="container">
      <div class="row">
        <div class="col-sm">
            <h4>PhimTMD Việt Nam</h4>
            <p className="phimphimvn">Đây là PhimTMD Việt Nam là một nền tảng xem phim trực tuyến được thực hiện bởi các thành viên Trương Quốc Đạt - Huỳnh Tuấn Minh - Trần Đức Trí. Phục vụ cho đồ án môn học Internet và công nghệ Web </p>
          </div>
          <div className="col-sm">
            <h4>Liên hệ</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/catecholamines.twelfthy"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" height="30px"></img></a>
              <a href="https://www.twitter.com/"><img src="https://cdn-icons-png.flaticon.com/512/2504/2504947.png" height="30px"></img></a>
              <a href="https://www.instagram.com/"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" height="30px"></img></a>
              <a href="https://www.linkedin.com/"><img src="https://cdn-icons-png.flaticon.com/512/2504/2504923.png" height="30px"></img></a>
            </div>
          </div>
        <div className="col-sm">
          <h4>CHĂM SÓC KHÁCH HÀNG</h4>
          <ul>
            <li><a href="#">HOTLINE: 1900 1009</a></li>
            <li><a href="#">GIỜ LÀM VIỆC: 8:00 - 22:00 (BAO GỒM CẢ NGÀY LỄ) </a></li>
            <li><a href="mailto:phimtmd.hoidap@twelfthywn.space">Emails hỗ trợ: phimtmd.hoidap@twelfthywn.space</a></li>
            <li><a href="#">49 Bùi Thị Đông, Tp. Hồ chí Minh</a></li>
          </ul>
        </div>
      </div>
     </div>
  </footer>
    </div>
    </div>
  );
}

export default App;
