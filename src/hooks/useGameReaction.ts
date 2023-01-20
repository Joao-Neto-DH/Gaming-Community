import axios from "axios";
import { useReducer } from "react";

type Reaction = {reaction?: 1|0|-1, error?: any};
type Action = {type: "LOADING"|"DONE"|"ERROR", payload:any};

const reducer = (state: Reaction, action: Action):Reaction=>{
    switch (action.type) {
        case "DONE":return {reaction: action.payload.reaction};
        case "ERROR": return {reaction: undefined, error: action.payload }
        case "LOADING":
        default: return state;
    }
}
const initState: Reaction = {reaction: undefined};

function useGameReaction(gameReactionLink: string){
    const [reaction, dispatch] = useReducer<(reaction:Reaction, action: Action)=>Reaction, Reaction>(reducer, initState, state=>state);

    const reactToGame = (reaction: 1|0|-1) => {
        axios.post(gameReactionLink, {"reaction": reaction})
            .then(response=>response.data)
            .then(data=>dispatch({type:"DONE", payload: data.data }))
            .catch(err=>dispatch({type:"ERROR", payload: err.response.data }));
    }

    return { reaction, reactToGame, dispatch };
}

export { useGameReaction };