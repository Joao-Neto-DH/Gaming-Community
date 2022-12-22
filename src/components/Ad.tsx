import React from "react";
import "./Ad.css";

const Ad: React.FC<{}> = ()=>{
    return (
        <div className="ad">
            <img src="/assets/img/gow.jpg" alt="Ad image" className="ad-img" />
            <div className="ad-content">
                <div className="ad-header">
                    <h3 className="ad-title">God Of War - Ragnarok</h3>
                    <p className="ad-subtitle">Lançamento: 22/12/2022</p>
                    <ul className="ad-category">
                        <li>Acção</li>
                        <li>Aventura</li>
                        <li>Sobrevivência</li>
                        <li>Luta</li>
                    </ul>
                </div>
                <div className="ad-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, dolorum vitae aliquid fugit quo eum et nemo quisquam repudiandae tempora soluta pariatur culpa autem eveniet, corrupti eaque amet, non recusandae?
                </div>
                <div className="ad-footer">
                    <img src="/assets/img/background.png" alt="profile" className="profile-pic" />
                    <p>Autor: <strong>João Neto</strong><br/><span className="ad-subtitle">Data: 22/12/2022</span></p>
                </div>
            </div>
        </div>
    );
}
export default Ad;