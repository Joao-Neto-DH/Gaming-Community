import { CSSProperties, MouseEventHandler, useState } from "react";
import "./ChatRoom.css";

function ChatRoom() {
    const [user, setUser] = useState("Convidado");
    const [closed, setClosed] = useState(false);
    const close: CSSProperties = {bottom: "-340px"};

    const changeAccount: MouseEventHandler<HTMLLIElement> = evt => {
        setUser((evt.currentTarget as HTMLElement).innerText);
    }
    const closeChat: MouseEventHandler<HTMLButtonElement> = evt => {
        setClosed(value=>!value);
    };

    return ( 
        <div className="chat-room" style={closed ? close : undefined}>
            <div className="chat-room-header">
                <div className="user-account">
                    <button className="btn user-selected">
                        <div className="streammer-picture">
                            <img src="/assets/img/gow.jpg" alt="user" className="streammer-img" />
                        </div>
                        <span>
                            <ul>
                                <li onClick={ changeAccount } className="btn">Convidado</li>
                                <li onClick={ changeAccount } className="btn">Corrente</li>
                            </ul>
                            { user }
                        </span>
                    </button>
                    <button type="button" className="btn" onClick={ closeChat }>X</button>
                </div>
            </div>
            <div className="chat-room-body">
                <div className="sms">
                    <span className="time">{ new Date().toLocaleString().split(",")[0] }</span>
                    <pre>something reallly good</pre>
                </div>
                <div className="sms sms-owner">
                    <span className="time">{ new Date().toLocaleString().split(",")[0] }</span>
                    <pre>something reallly good</pre>
                </div>
            </div>
            <div className="chat-room-footer">
                <textarea 
                    name="messageBox" 
                    cols={30} 
                    rows={1} 
                    placeholder="Escreva sua mensagem" 
                    className="chat-room-text"></textarea>
                <button type="button" className="btn">Enviar</button>
            </div>
        </div>
     );
}

export default ChatRoom;