import './RankList.css';

function RankList() {
  return (
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
    
  );
}

export default RankList;
