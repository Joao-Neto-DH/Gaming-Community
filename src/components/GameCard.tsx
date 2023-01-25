import { MouseEventHandler, ReactElement, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Game } from "../@types/Game";
import { useGameReaction } from "../hooks/useGameReaction";
import "./GameCard.css";
import Modal, { useModal } from "./Modal";


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
const stars = new Array<ReactElement<HTMLOrSVGElement>>(5).fill(star());

const GameCard: React.FC<{game: Game}> = ({ game }) => {
    const [starsSelected, setStarsSelected] = useState(2);
    const {reaction, reactToGame, dispatch} = useGameReaction(game.like_url);
    const previousError = useRef(reaction.error);
    const modalProps = useModal(true);

    const turnON: MouseEventHandler<HTMLLIElement> = (evt)=>{
        evt.currentTarget.parentElement?.childNodes.forEach((li,i)=>{
            if(li === evt.currentTarget)
                setStarsSelected(i);
        });
    }

    useEffect(()=>{
        function openModal(){
            if(previousError.current === reaction.error){
                return;
            }else{
                previousError.current = reaction.error
            }

            if(reaction.error && !modalProps.isOpen) modalProps.toggleOpen(); 
        }
        openModal();
    }, [reaction, modalProps])

    return ( 
        <>
            {
                (reaction.error !== undefined) && 
                <Modal isOpen={modalProps.isOpen} toggleOpen={modalProps.toggleOpen}>
                    <div
                        style={{
                            backgroundColor:"#fff",
                            padding: "10px",
                            borderRadius: "3px"
                        }}
                    >   
                        <p
                            style={{
                                padding: "10px",
                                borderRadius: "3px",
                                backgroundColor: "rgba(255,0,0,.4)",
                                borderLeft: "4px solid red",
                                fontSize: "1rem"
                            }}
                        >{ reaction.error.error_message}</p>
                    </div>
                </Modal>
            }

            <div className="card-game">
                <Link to={`/game/${game.id}`} className="card-img"><img src="/assets/img/gow.jpg" alt={ game.title.toLowerCase() }/></Link>
                <div className="card-body">
                    <div className="card-header">
                        <h4 className="card-title"><Link to={`/game/${game.id}`}>{ game.title }</Link></h4>
                        <div className="ad">
                            <ul className="ad-category">
                                { game.genre.map((genre, index)=><li key={index}>{genre}</li>) }
                            </ul>
                        </div>
                        {/* Estrelas */}
                        <ul className="card-stars" style={{margin:"0"}}>
                            { stars.map((str, i)=><li key={i} className={(starsSelected>=i)?"active":""} onClick={turnON}>{str}</li>) }
                        </ul>
                        {/* Quantidade de comentários e reações */}
                        <span style={{fontSize:"12px", color:"green", paddingRight:"10px"}}>👍: {game._count.likes} </span>
                        <span style={{fontSize:"12px", color:"red"}}>👎: {game._count.comments}</span>
                        <button className="card-game-info">
                            <span style={{width:"17px", height:"16px", display:"inline-block"}}>i</span>
                        </button>
                    </div>
                    <hr style={{opacity:"0.6"}}/>
                    <p className="card-description">{ game.description }</p>
                </div>
                {/* Reagir ao jogo */}
                <div className="card-footer">
                    <button 
                        onClick={()=>{
                            reactToGame(reaction.reaction ? 1 : 0 );
                            dispatch({type:"LOADING", payload:"" });
                        }} 
                        style={{background:reaction.reaction === 1 ? "orange":""}}>👍</button>

                    <button 
                        onClick={()=>{
                            reactToGame(!reaction.reaction ? -1 : 0 );
                            dispatch({type:"LOADING", payload:"" });
                        }} 
                        style={{background:reaction.reaction === -1 ? "orange":""}}>👎</button>
                </div>
            </div>
        </>
     );
}

export default GameCard;