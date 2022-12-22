import React from "react";
import "./Ad.css";

const Ad: React.FC<{}> = ()=>{
    return (
        <div className="ad">
            <img src="/background.png" alt="Ad image" className="ad-img" />
            <div className="ad-content">
                <div className="ad-header">
                    <h3 className="ad-title">say</h3>
                    <p className="ad-subtitle">22/12/2022</p>
                </div>
                <div className="ad-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, dolorum vitae aliquid fugit quo eum et nemo quisquam repudiandae tempora soluta pariatur culpa autem eveniet, corrupti eaque amet, non recusandae?
                </div>
                <div className="ad-footer">
                    somenthing
                </div>
            </div>
        </div>
    );
}
export default Ad;