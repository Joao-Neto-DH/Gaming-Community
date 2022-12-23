import "./GameCard.css";
import "./GameCardLoading.css";

function GameCardLoading() {
    return ( 
        <div className="card-game load">
            <div className="card-img"></div>
            <div className="card-body">
                <div className="card-header">
                    <div className="card-title"></div>
                    <div className="card-title" style={{width:"60%"}}></div>
                    <div className="card-game-info"></div>
                </div>
                <hr style={{opacity:"0.6"}}/>
                <div className="card-description"></div>
                <div className="card-description"></div>
                <div className="card-description"></div>
            </div>
            <div className="card-footer">
                <div></div>
                <div></div>
            </div>
        </div>
     );
}

export default GameCardLoading;