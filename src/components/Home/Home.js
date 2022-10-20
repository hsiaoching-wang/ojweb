import './Home.css';
import { Link , Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import RankList from '../ranklist/RankList';
import Pet from '../Pet/Pet';
import Profile from '../Profile/Profile';
import Store from '../Store/Store';
import {useState, useEffect} from 'react'
import CodeLink from '../CodeLink/CodeLink';

function Home({isLogin}) {
  console.log(isLogin)
  return (
      <section>
        <div className='ball1'></div>
        <div className='left'>
          <Profile/>
          <CodeLink/>
        </div>
        <Routes>
          <Route path="/" element={<RankList/>} />
          <Route path="/pet" element={<Pet/>} />
          <Route path="/store" element={<Store/>} />
        </Routes>
        <div className='button'>
          <Link className="" to="/pet">Pet</Link>
          <Link className='' to="/Store">Store</Link>
          <Link className='' to="/">Rank</Link>
        </div>
        
      </section>
  );
}

export default Home;
