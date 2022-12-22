import "./Header.css";

interface MenuItem{
    link? : string;
    title: string; 
}

function Header() {
    var links : Array<MenuItem> = [{title:"HOME"},{title:"HOME"},{title:"LOGIN"},{title:"HOME"}];
    return ( 
        <header className="header">
            <div className="header-inner">
                <div className="header-content">
                    <h1 className="brand">LOGO</h1>
                    <nav className="nav-items">
                        <ul>
                            {links.map((value, index)=><li key={index}><a href={value.title}>{value.title}</a></li>)}
                        </ul>
                    </nav>
                </div>
            </div>
        </header> 
    );
}

export default Header;