import axios from "axios";
import { useEffect, useReducer } from "react";
import { Game } from "../@types/Game"
import { Action } from "./useLoadGames"

type StateGame = {game?: Game & {
        screenshoots:{
                image_path: string,
                cover: boolean
        }[],
        comments: {
            id: string,
            updatedAt: Date,
            description: string,
            User: {
                name: string,
            }
        }[]
    }, 
    error?: any, 
    loading: boolean
};

const reducer = (state: StateGame, action: Action):StateGame => {
    switch (action.type) {
        case "DONE": return { game: action.payload, error: undefined, loading: false }

        case "ERROR": return { game: undefined, error: action.payload, loading: false }

        case "LOADING": return { ...state, loading: true };
    
        default: return state
    }
}

const initState = { loading: true };

function useLoadGame(id?: string){
    const [ game, dispatch ] = useReducer<(state: StateGame, action: Action)=>StateGame, StateGame>(reducer, initState, initState=>initState);

    useEffect(()=>{
        axios.get(`http://localhost:3024/games/${id}`)
            .then(response=> response.data)
            .then(data=> dispatch({ payload: data.game, type: "DONE" }))
            .catch(response=> dispatch({payload: response.data, type: "ERROR"}))
    }, [id]);

    return game
}

export { useLoadGame }