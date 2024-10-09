import { useState } from "react";
import Topp from "./Topp";
import Timer from "./Timer";

function Boks() {

    const [erTrykket, setErTrykket] = useState(false);
    const [trykkTimer, setTrykktimer] = useState(null);

    const status = ["Default", "Brann", "Lufter"];
    const [alarmStatus, setAlarmStatus] = useState(status[0]);
    const [statusIndeks, setStatusIndeks] = useState(status.indexOf("Default"))

    const TRYKK_LENGDE = 3000;

    function erBrann() {
        if (alarmStatus === "Default") {
            setStatusIndeks(1);
            setAlarmStatus(status[1]);
        }
    }

    const handleMuseTrykk = () => {
        setErTrykket(true);
        const timer = setTimeout(() => {
            changeState();
            console.log("Long press confirmed");
        }, TRYKK_LENGDE);

        setTrykktimer(timer);
    }

    const handleMuseSlipp = () => {
        clearTimeout(trykkTimer);
        setTrykktimer(null);
        setErTrykket(false);
    }

    const handleMusForlater = () => {
        clearTimeout(trykkTimer);
        setTrykktimer(null);
        setErTrykket(false);
    }

    function changeState() {
        if (statusIndeks === 0) return;
        const nesteIndeks = statusIndeks === 2 ? 0 : statusIndeks + 1;
        setStatusIndeks(nesteIndeks);
        setAlarmStatus(status[nesteIndeks]);
    }
    
    const trykketStyle = {
        filter: erTrykket ? "brightness(90%)" : "brightness(100%)",
    }

    const bildeUrl = "./src/assets/kanseller_knapp.jpg";

    return(
        <>
            <div className="boks">
                <div className="klokke-tekst">
                    <h3>Tid til brannsentral blir varslet:</h3>
                    <Timer status={alarmStatus}/>
                </div>
                <div className="topp">
                    <Topp status={alarmStatus}/>
                </div>
                <div className="bunn">
                    <div className="høyttaler"><p>Høyttaler</p></div>
                    <img    className="knapp" src={bildeUrl}
                            style={trykketStyle}
                            onMouseDown={handleMuseTrykk}
                            onMouseUp={handleMuseSlipp}
                            onMouseLeave={handleMusForlater}>
                            </img>
                    <div className="høyttaler"><p>Høyttaler</p></div>
                </div>
            </div>
            <button className="brann-knapp" onClick={erBrann}><b>Brann</b></button>
        </>
    );
}

export default Boks