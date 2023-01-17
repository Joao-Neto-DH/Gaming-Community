import axios from "axios";
import { useEffect, useReducer, useRef, useState } from "react";
import { Game } from "../@types/Game";

type Response = {games?: Game[], error?: any, loading: boolean};
type Action = {type: "DONE" | "LOADING" | "ERROR", datas?: any[], error?: any};

const initState: Response = { loading: true };

const reducer = (state: Response, action: Action): Response => {
    switch (action.type) {
        case "DONE": return { games: action.datas, error: undefined, loading: false };        
        case "ERROR": return {games: undefined, error: action.error, loading: false }
        default: return {...state, loading: true };
    }
}

function useLoadGame(page = 1, items = 10) {
    const itemCount = useRef(items);
    const [response, dispatch] = useReducer<(state: Response, action: Action)=>Response, Response>(reducer, initState, response => response);
    const [pageNumber, setPageNumber] = useState(page);

    useEffect(()=>{
        axios.get("http://localhost:3024/games")
            .then(({data})=>dispatch({datas: data.datas, type: "DONE", error: undefined}))
            .catch(err=>dispatch({datas: undefined, type: "ERROR", error: err}));
    }, [pageNumber]);

    function setPage(page: number){
        dispatch({ datas: undefined, error: undefined, type: "LOADING" })
        setPageNumber(page);
    }

    return { response, setPage };
}

export { useLoadGame }