import { Link } from "react-router-dom";
import "./Footer.css";

function Footer(){
    return (
        <footer className="footer">
            <div className="footer-body">
                <div className="footer-group">
                    <h1>
                        LOGO
                    </h1>
                </div>
                <div className="footer-group">
                    <h4 className="group-title">Redes Sociais</h4>
                    <ul>
                        <li><Link to="/">Linkedlin</Link></li>
                        <li><Link to="/">Facebook</Link></li>
                        <li><Link to="/">Instagram</Link></li>
                        <li><Link to="/">Whatsapp</Link></li>
                    </ul>
                </div>
                <div className="footer-group">
                    <h4 className="group-title">Patrocinadores</h4>
                    <ul>
                        <li><Link to="/">Nintendo</Link></li>
                        <li><Link to="/">Sony</Link></li>
                        <li><Link to="/">Comic.Com</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-right">
                Todos os Direitos Reservados - &copy;{new Date().getFullYear()}
            </div>
        </footer>
    );
}

export default Footer;