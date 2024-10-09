import Timer from "./Timer";

function Topp(props) {

    const brannLys = {
        backgroundColor: props.status === "Brann" ? "hsla(0, 100%, 50%, 0.774)" : "hsla(0, 100%, 50%, 0.1)"
    }
    
    const lufterLys = {
        backgroundColor: props.status === "Lufter" ? "hsla(400, 100%, 50%, 0.774)" : "hsla(400, 100%, 50%, 0.1)"
    }

    const defaultLys = {
        backgroundColor: props.status === "Default" ? "hsla(500, 100%, 35%)" : "hsla(500, 100%, 35%, 0.1)"
    }

    return(
        <>  
            
            <h2>Ved <u>FALSK</u> alarm, gjør følgende:</h2>
            
            <div className="lys-text-holder">
                <div className="lys" style={brannLys}></div>
                <p>Trykk og hold knapp i 3 sekunder, deretter luft ut.</p>
            </div>
            <div className="lys-text-holder">
                <div className="lys" style={lufterLys}></div>
                <p>Etter utlufting: trykk og hold knapp i 3 sekunder.</p>
            </div>
            <div className="lys-text-holder">
                <div className="lys" style={defaultLys}></div>
                <p>Normal drift.</p>
            </div>
        </>
    );
}

export default Topp