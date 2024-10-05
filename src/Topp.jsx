
function Topp(props) {

    const brannLys = {
        backgroundColor: props.status === "Brann" ? "hsla(0, 100%, 50%, 0.774)" : "hsla(0, 100%, 50%, 0.185)"
    }
    
    const lufterLys = {
        backgroundColor: props.status === "Lufter" ? "hsla(400, 100%, 50%, 0.774)" : "hsla(400, 100%, 50%, 0.185)"
    }

    const defaultLys = {
        backgroundColor: props.status === "Default" ? "hsla(500, 100%, 35%)" : "hsla(500, 100%, 40%, 0.185)"
    }

    return(
        <>
            <div className="lys-text-holder">
                <div className="lys" style={brannLys}></div>
                <p>Ikke brann: trykk og hold knapp i 3 sekunder og luft ut.</p>
            </div>
            <div className="lys-text-holder">
                <div className="lys" style={lufterLys}></div>
                <p>Ferdig luftet: trykk og hold knapp i 3 sekunder.</p>
            </div>
            <div className="lys-text-holder">
                <div className="lys" style={defaultLys}></div>
                <p>Alt er bra.</p>
            </div>
        </>
    );
}

export default Topp