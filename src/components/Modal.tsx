import React, { useState } from "react";
import { MouseEventHandler, ReactNode } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

interface Props{
    children: ReactNode,
    onClose?: ()=>void,
    isOpen: boolean,
    toggleOpen: ()=>void
}


function Modal(props: Props) {

    let closeCb: MouseEventHandler<HTMLButtonElement> = (evt)=>{
        props.toggleOpen();
        props.onClose && props.onClose();
    }
    // useEffect(()=>{
    //     console.log("efeito")
    // },[props])

    return ( 
        <>
            {    
                props.isOpen &&
                ReactDOM.createPortal( 
                    <div className="modal" id="modal">
                        <button type="button" className="btn" onClick={closeCb}>✖</button>
                        <div className="modal-content">
                            {
                                props.children
                            }
                        </div>
                    </div>, 
                    document.getElementById("modal-root") as Element
                )
            }
        </>
     );
}

export function useModal(){
    const [isOpen, setOpen] = useState(false);

    function toggleOpen() {
        setOpen(!isOpen);
    }

    return { isOpen, toggleOpen }
}

export default Modal ;