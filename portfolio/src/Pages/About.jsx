import Cv from "../Composant/About/Cv";
import Certif from "../Composant/About/Certif";

function About (){
    return(
        <>
            <div className="cvPdf">
                <Cv />
            </div>
            <div className="allCertif">
                <Certif />
            </div>
        </>
    )
}

export default About