import React from 'react'
import  "./CodeLink.scss"
import Code from '../Code/Code';
import { Link , Routes, Route, useLocation, useNavigate} from 'react-router-dom';

function CodeLink() {
  return (
    <div className='codelink'>
        <Routes>
          <Route path="/code" element={<Code/>} />
        </Routes>
        <div>10/20</div>
        <Link className="" to="/code">Code1</Link>
        <Link className='' to="/code">Code2</Link>
        <Link className='' to="/code">Code3</Link>
    </div>
  )
}

export default CodeLink