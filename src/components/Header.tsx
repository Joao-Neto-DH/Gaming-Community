import "./Header.css";

interface MenuItem{
    link? : string;
    title: string; 
}

function Header() {
    var links : Array<MenuItem> = [
        {title:"HOME",link:"/"},
        {title:"HOME",link:"/categories"},
        {title:"LOGIN",link:"/signin"},
        {title:"HOME",link:"/signup"}
    ];
    return ( 
        <header className="header">
            <div className="header-inner">
                <div className="header-content">
                    <h1 className="brand">LOGO</h1>
                    <nav className="nav-items">
                        <ul>
                            {
                                links.map(
                                    (value, index) => <li key={index}>
                                        <a href={value.link} className={document.location.pathname ===value.link ? "active":""}>{value.title}</a>
                                    </li>
                                )
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </header> 
    );
}

export default Header;