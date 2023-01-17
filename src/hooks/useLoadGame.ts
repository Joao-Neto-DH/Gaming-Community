import axios from "axios";
import { useEffect, useReducer } from "react";
import { Game } from "../@types/Game";

type Response = {games?: Game[], error?: any, loading: boolean};
type Action = {type: "DONE" | "LOADING" | "ERROR", datas?: any};

const initState: Response = { loading: true };

const reducer = (state: Response, action: Action): Response => {
    switch (action.type) {
        case "DONE": return { games: action.datas, error: undefined, loading: false };        
        case "ERROR": return {games: undefined, error: action.datas, loading: false }
        default: return {...state, loading: true };
    }
}

function useLoadGame(page = 1, items = 10) {
    const [response, dispatch] = useReducer<(state: Response, action: Action)=>Response, Response>(reducer, initState, response => response);

    useEffect(()=>{
        axios.get("http://localhost:3024/games")
            .then(({data})=>dispatch({datas: data.datas, type: "DONE"}))
            .catch(err=>dispatch({datas: err, type: "ERROR"}));
    }, [response]);

    function setPage(page: number){
        dispatch({ datas: undefined, type: "LOADING" });
    }

    return { response, setPage };
}

export { useLoadGame }