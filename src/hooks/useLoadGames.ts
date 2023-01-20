import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { Game } from "../@types/Game";

type Response = {games?: Game[], error?: any, loading: boolean};
export type Action = {type: "DONE" | "LOADING" | "ERROR", payload?: any};

const initState: Response = { loading: true };

const reducer = (state: Response, action: Action): Response => {
    switch (action.type) {
        case "DONE": return { games: action.payload, error: undefined, loading: false };        
        case "ERROR": return {games: undefined, error: action.payload, loading: false }
        default: return {...state, loading: true };
    }
}

function useLoadGames(page = 1, items = 10) {
    const [pageNum, setPageNum] = useState(page);
    const [response, dispatch] = useReducer<(state: Response, action: Action)=>Response, Response>(reducer, initState, response => response);

    useEffect(()=>{
        axios.get("http://localhost:3024/games", {params: {"page": pageNum }})
            .then(({data})=>dispatch({payload: data.datas, type: "DONE"}))
            .catch(err=>dispatch({payload: err, type: "ERROR"}));
    }, [pageNum]);

    function nextPage(page: number = 1){
        dispatch({ payload: undefined, type: "LOADING" });
        setPageNum(p=>p+page);
    }

    return { response, nextPage };
}

export { useLoadGames }