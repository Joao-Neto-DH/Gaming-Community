import "./Streammer.css";

const Streammer: React.FC<{status:"online"|"offline"}> = (status)=>{
    return(
        <div className={`streammer ${status.status}`}>
            <div className="streammer-picture">
                <div className="streammer-img">
                    <img src="/assets/img/gow.jpg" alt="Streammer profile" />
                </div>
            </div>
            <div className="streammer-content">
                <p className="streammer-name">
                    João Neto
                </p>
                <i className="streammer-playing">
                    God of War
                </i>
            </div>
        </div>
    );
}
export default Streammer;