import './RankList.css';
import planet from './planet.png'

function RankList() {
    
  return (
    <div className="App">
        <div className='proflie'>
            <div className='name'>
                <img src={planet} alt="" style={{position:"relative",left:"25%",width: "50px",height:"50px"}}/>
                <p> HsiaoChing</p>
            </div> 
            <div className='score'>
                <h4>Score</h4>
                <h4>1234</h4>
            </div>
            <div className='coin'>
                <h4>Coin</h4>
                <h4>1234</h4>
            </div>
        </div>
        <div className="box">
            <h3>Rank List</h3>
            <div className="list">
                <div className="content">
                    <div className="rank">#1</div>
                    <div>Jane</div>
                    <div>score：1234</div>
                </div>
            </div>
            <div className="list">
                <div className="content">
                    <h4 className="rank">#2</h4>
                    <h4>Sunnu</h4>
                    <p>score：1234</p>
                </div>
            </div>
            <div className="list">
                <div className="content">
                    <h4 className="rank">#3</h4>
                    <h4>C</h4>
                    <p>score：1234</p>
                </div>
            </div>
            <div className="list">
                <div className="content">
                    <h4 className="rank">#4</h4>
                    <h4>D</h4>
                    <p>score：1234</p>
                </div>
            </div>
        </div>
     </div>
    
  );
}

export default RankList;
