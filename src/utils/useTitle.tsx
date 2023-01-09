import { useState } from "react"

export function useTitle(title: string){
    const [docTitle, setDocTitle] = useState(title);
    document.title = `${docTitle.trim().length ? docTitle+" | " : "" }Gaming Community`;

    return setDocTitle;
}