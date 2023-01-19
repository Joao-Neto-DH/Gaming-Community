import { MouseEventHandler, ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import { Game } from "../@types/Game";
import "./GameCard.css";

const GameCard: React.FC<{game: Game}> = ({ game }) => {
    const [starsSelected, setStarsSelected] = useState(2);

    let stars = new Array<ReactElement<HTMLOrSVGElement>>(5).fill(star());
    function star(): ReactElement{
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g>
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/>
                </g>
            </svg>
        );
    }

    // for(let i = 0; i < 5; i++) stars.push(star());

    const turnON: MouseEventHandler<HTMLLIElement> = (evt)=>{
        evt.currentTarget.parentElement?.childNodes.forEach((li,i)=>{
            if(li === evt.currentTarget)
                setStarsSelected(i);
        });
    }

    return ( 
        <div className="card-game">
            <img src="/assets/img/gow.jpg" alt={ game.title.toLowerCase() } className="card-img"/>
            <div className="card-body">
                <div className="card-header">
                    <h4 className="card-title"><Link to={`/game/${game.id}`}>{ game.title }</Link></h4>
                    <div className="ad">
                        <ul className="ad-category">
                            { game.genre.map((genre, index)=><li key={index}>{genre}</li>) }
                        </ul>
                    </div>
                    <ul className="card-stars" style={{margin:"0"}}>
                        { stars.map((str, i)=><li key={i} className={(starsSelected>=i)?"active":""} onClick={turnON}>{str}</li>) }
                    </ul>
                    <span style={{fontSize:"12px", color:"green", paddingRight:"10px"}}>👍: {game._count.likes} </span>
                    <span style={{fontSize:"12px", color:"red"}}>👎: {game._count.comments}</span>
                    <button className="card-game-info">
                        <span style={{width:"17px", height:"16px", display:"inline-block"}}>i</span>
                    </button>
                </div>
                <hr style={{opacity:"0.6"}}/>
                <p className="card-description">{ game.description }</p>
            </div>
            <div className="card-footer">
                <button>👍</button>
                <button>👎</button>
            </div>
        </div>
     );
}

export default GameCard;