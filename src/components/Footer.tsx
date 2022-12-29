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
                        <li><a href="/">Linkedlin</a></li>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Whatsapp</a></li>
                    </ul>
                </div>
                <div className="footer-group">
                    <h4 className="group-title">Patrocinadores</h4>
                    <ul>
                        <li><a href="/">Nintendo</a></li>
                        <li><a href="/">Sony</a></li>
                        <li><a href="/">Comic.Com</a></li>
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