import { useState } from "react";
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

    document.body.style.overflow = `${props.isOpen ? "hidden":""}`

    return ( 
        <>
            {    
                props.isOpen &&
                ReactDOM.createPortal( 
                    <div className="modal">
                        <div className="modal-content">
                            {
                                props.children
                            }
                        </div>
                        <button type="button" className="btn" onClick={closeCb}>✖</button>
                    </div>, 
                    document.getElementById("modal-root") as Element
                )
            }
        </>
     );
}

export function useModal(opened = false){
    const [isOpen, setOpen] = useState(opened);

    function toggleOpen() {
        setOpen(!isOpen);
    }

    return { isOpen, toggleOpen }
}

export default Modal ;