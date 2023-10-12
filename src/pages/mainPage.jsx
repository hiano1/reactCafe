import { MainCardsList } from "../components/Cards/mainCardsList";

import "./mainPage.css";

const adList = [1, 2, 3, 4, 5];
export default function MainPage() {
    /** --ads contents scroll view --simple membership view --go to QRcode scan*/
    return (
        <div className="mainPage">
            return (
            <div className="mainView">
                <MainCardsList list={adList} />
                {/* <simpleMembershipView data={userData} /> */}
                {/* <getSimpleOrder data={ADList} /> */}
            </div>
            );
            {/* 
            --simple order view
            -membership view
            -order view
            -sns view
            -control view
            -down menu bar */}
        </div>
    );
}
