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
            <ImageView imgs={imgs} isOpen={isOpen} toggleOpen={toggleOpen} />
            <img 
                style={{cursor:"pointer"}}
                onClick={click}
                src={src} 
                alt={alt}
                className={className}/>
        </>
     );
}

const ImageView: React.FC<{imgs: IMG[], isOpen: boolean, toggleOpen: ()=>void}> = ({imgs, isOpen, toggleOpen}) => {
    const setSelected = useState(-1)[1];
    const [zoom, setZoom] = useState(false);

    const btnStyle: CSSProperties = {
        backgroundColor: "rgba(0,0,0,0.6)",
        border: "1px solid rgb(var(--font-color))",
        borderRadius: "50%",
        padding: "16px",
        margin: "0 10px",
    }
    let activeImage = -1;

    function changeActiveImage(index: number) {
        imgs[activeImage].active = false;
        activeImage = index;
        imgs[activeImage].active = true;
        setSelected(activeImage);
        setZoom(false);
    }
    
    return (
        <Modal
            isOpen={isOpen}
            toggleOpen={toggleOpen}>
            <>
                {
                    imgs.map((el, i)=>{
                        if(el.active) activeImage = i;
                        
                        return (
                            <img 
                                onClick={()=>setZoom(!zoom)}
                                key={el.src} 
                                src={el.src} 
                                alt={el.alt} 
                                style={{
                                    width: zoom ? "150%" : "100%",
                                    display: `${el.active ? "":"none"}`,
                                    cursor: zoom ? "zoom-out" : "zoom-in",
                                    transition: "0.1s"
                                }}
                            />
                        )
                    })
                }
                {   imgs.length > 1 &&
                    <div style={{position:"absolute",top: "50%",left: "50%", transform:"translate(-50%, -50%)"}}>
                    <button 
                    style={btnStyle}
                    className="btn"
                    onClick={
                        ()=>changeActiveImage((activeImage-1)<0 ? imgs.length-1 : activeImage-1)
                    }>⏪</button>

                    <button 
                    style={btnStyle}
                    className="btn"
                    onClick={
                        ()=>changeActiveImage((activeImage+1)%imgs.length)
                    }>⏩</button>
                    </div>
                }
            </>
        </Modal>
    );
}

export default View;