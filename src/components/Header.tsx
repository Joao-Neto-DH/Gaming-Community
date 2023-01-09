import { MouseEventHandler, useContext } from "react";
import ThemeContext from "../utils/ThemeContext";
import "./Header.css";

interface MenuItem{
    link? : string;
    title: string; 
}

function Header() {
    const { isLight, toggleTheme } = useContext(ThemeContext);

    const themeChange: MouseEventHandler<HTMLAnchorElement> = (evt) =>{
        evt.preventDefault();
        toggleTheme();
    }

    const links : Array<MenuItem> = [
        {title:"COMUNIDADE",link:"/"},
        {title:"GAME",link:"/game"},
        {title:"LOGIN",link:"/login"},
        // {title:"HOME",link:"/signup"}
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
                            <li><a href="#/theme" onClick={themeChange}>{isLight ? "🌞" : "🌙"}</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header> 
    );
}

export default Header;