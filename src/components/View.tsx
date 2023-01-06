import { CSSProperties, MouseEventHandler, useState } from "react";
import Modal, { useModal } from "./Modal";

type IMG = {src:string, alt:string, active?: boolean};

const View:React.FC<{src:string, alt:string, className?: string}> = ({src, alt, className}) => {
    const { isOpen, toggleOpen } = useModal();
    const [ imgs, setImgs ] = useState(Array<IMG>);
    
    const click: MouseEventHandler<HTMLImageElement> = (evt)=>{        
        let pics:Array<IMG> = [];
        let img = evt.currentTarget;

        img.parentElement?.childNodes.forEach(el=>{            
            if(el instanceof HTMLImageElement){
                pics.push({
                    src: el.src,
                    alt: el.alt,
                    active: img === el
                });
            }
        });

        setImgs(()=>pics);
        toggleOpen();
        
    }

    return ( 
        <>
            <ImageView values={imgs} isOpen={isOpen} toggleOpen={toggleOpen} />
            <img 
                style={{cursor:"pointer"}}
                onClick={click}
                src={src} 
                alt={alt}
                className={className}/>
        </>
     );
}

const ImageView: React.FC<{values: IMG[], isOpen: boolean, toggleOpen: ()=>void}> = ({values, isOpen, toggleOpen}) => {
    const setSelected = useState(-1)[1];
    const btn: CSSProperties = {
        backgroundColor: "rgba(0,0,0,0.6)",
        border: "1px solid rgb(var(--font-color))",
        borderRadius: "50%",
        padding: "16px",
        margin: "0 10px"
    }
    let num = -1;

    return (
        <Modal
            isOpen={isOpen}
            toggleOpen={toggleOpen}>
            <>
                {/* <div> */}
                    {
                        values.map((el, i)=>{
                            if(el.active) num = i;

                            return <img 
                                key={el.src} 
                                src={el.src} 
                                alt={el.alt} 
                                style={{
                                    width: "100%",
                                    display: `${el.active ? "":"none"}`
                                }}/>
                        })
                    }
                {/* </div> */}
                {   values.length > 1 &&
                    <div style={{position:"absolute",top: "50%",left: "50%", transform:"translate(-50%, -50%)"}}>
                    <button 
                    style={btn}
                    className="btn"
                    onClick={()=>{
                        values[num].active = false;
                        num = (num-1)<0 ? values.length-1 : num-1;
                        values[num].active = true;
                        setSelected(num);
                    }}>⏪</button>
                    <button 
                    style={btn}
                    className="btn"
                    onClick={()=>{
                        values[num].active = false;
                        num = (num+1)%values.length;
                        values[num].active = true;
                        setSelected(num);
                    }}>⏩</button>
                    </div>
                }
            </>
        </Modal>
    );
}

export default View;