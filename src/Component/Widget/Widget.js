import React from "react";
import "./Widget.scss"

const Widget = () => {
    return <>
        <div className="widget-dashboard"><div className="left">
            <span className="title-widget"><h2>Hi Andrew!</h2></span>
            <span className="greeting">Good morning!</span>
            <div className="description-text">
                <span className="description-widget">You have following upcoming sessions!</span>
            </div>

        </div>
        </div>
    </>;
};

export default Widget;
