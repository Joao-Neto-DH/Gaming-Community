import "./GameCard.css";

function GameCard() {
    return ( 
        <div className="card-game">
            <img src="/assets/img/gow.jpg" alt="God of War" className="card-img"/>
            <div className="card-body">
                <div className="card-header">
                    <h4 className="card-title">God of War</h4>
                    <ul className="card-stars">
                        <li className="active">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z"/>
                                    <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/>
                                </g>
                            </svg>
                        </li>
                        <li className="active">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z"/>
                                    <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/>
                                </g>
                            </svg>
                        </li>
                        <li className="active">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z"/>
                                    <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/>
                                </g>
                            </svg>
                        </li>
                        <li className="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z"/>
                                    <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/>
                                </g>
                            </svg>
                        </li>
                        <li className="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z"/>
                                    <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z"/>
                                </g>
                            </svg>
                        </li>
                    </ul>
                    <button className="card-game-info">
                        <span style={{width:"17px", height:"16px", display:"inline-block"}}>i</span>
                    </button>
                </div>
                <hr style={{opacity:"0.6"}}/>
                <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sapiente unde fuga ullam explicabo.</p>
            </div>
            <div className="card-footer">
                <button>First#1</button>
                <button>First#1</button>
            </div>
        </div>
     );
}

export default GameCard;