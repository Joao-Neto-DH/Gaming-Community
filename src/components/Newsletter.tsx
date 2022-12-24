import "./Newsletter.css";

function Newsletter() {
    return ( 
        <div className="newsletter">
            <div className="newsletter-inner">
                <div className="newsletter-header ad-header">
                    <h4 className="ad-title">NEWSLETTER</h4>
                    <p>Assine já e receba as novidades no mundo gamer</p>
                </div>
                <form action="#" method="POST" className="newsletter-form">
                    <input type="email" name="email" aria-label="email" className="form-input newsletter-input" placeholder="Digite seu email" required />
                    <button type="submit" className="btn newsletter-btn">Assinar</button>
                </form>
            </div>
        </div>
     );
}

export default Newsletter;