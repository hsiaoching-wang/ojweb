import './Home.css';
import { Link , Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import RankList from '../ranklist/RankList';
import Pet from '../Pet/Pet';
import Profile from '../Profile/Profile';
import Store from '../Store/Store';

function Home() {
  return (

      <section>
      <div className='ball1'></div>
        <div>
          <Profile/>
        </div>
        <Routes>
        <Route path="/" element={<RankList/>} />
        <Route path="/pet" element={<Pet/>} />
        <Route path="/store" element={<Store/>} />
        </Routes>
        <div className='button'>
          <Link className="" to="/pet">Pet</Link>
          <Link className='' to="/Store">Store</Link>
        </div>
      </section>
  );
}

export default Home;
