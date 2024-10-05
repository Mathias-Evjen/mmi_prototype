import { useEffect, useState } from "react"

function Timer(props) {
    const [sekunder, setSekunder] = useState(0);
    const [erAktiv, setErAktiv] = useState(false);

    useEffect(() => {
        switch (props.status) {
            case "Brann":
                setSekunder(240);
                setErAktiv(true);
                break;
            
            case "Lufter":
                setSekunder(300);
                setErAktiv(true);
                break;
            
            case "Default":
                setSekunder(0);
                setErAktiv(false);
                break;

            default:
                break;
        }
    }, [props.status]);

    useEffect(() => {
        if (sekunder <= 0) return;

        const intervallId = setInterval(() => {
            setSekunder((prevSeconds) => prevSeconds - 1);
        }, 1000);

        return () => clearInterval(intervallId);
    }, [sekunder, erAktiv]);

    const minutter = Math.floor(sekunder / 60);
    const displaySekunder = sekunder % 60;

    const formatMinutter = String(minutter).padStart(2, '0');
    const fomatSekunder = String(displaySekunder).padStart(2, '0');

    return(
        <div className="klokke">
            <p>{formatMinutter}:{fomatSekunder}</p>
        </div>
    );
}

export default Timer