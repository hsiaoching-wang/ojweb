import './App.css';
import RankkList from './components/ranklist/RankList';
import { Link , Routes, Route, useLocation, useNavigate} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <section>
        <Routes>
        <Route path="/" element={<RankkList/>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
