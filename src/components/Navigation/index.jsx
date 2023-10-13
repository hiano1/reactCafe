import { Link } from "react-router-dom";

import HomeSVG from "../../assets/home.svg?react";
import CardSVG from "../../assets/card.svg?react";
import PotionSVG from "../../assets/potion.svg?react";
import SnsSVG from "../../assets/sns.svg?react";
import MenuSVG from "../../assets/menu.svg?react";
import "./style.css";

export const Navigation = () => {
    return (
        <div className="mainNavigation">
            <div className="home">
                <Link to={`/`}>
                    <HomeSVG width="2rem" height="2rem" />
                </Link>
            </div>
            <div className="membership">
                <Link to={`/membership`}>
                    <CardSVG width="2rem" height="2rem" />
                </Link>
            </div>
            <div className="order">
                <PotionSVG width="2rem" height="2rem" />
            </div>
            <div className="sns">
                <SnsSVG width="2rem" height="2rem" />
            </div>
            <div className="control">
                <MenuSVG width="2rem" height="2rem" />
            </div>
        </div>
    );
};
