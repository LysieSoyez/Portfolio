import Cv from "../Composant/About/Cv";
import Certif from "../Composant/About/Certif";

function About (){
    return(
        <div className="about">
            <div className="cvPdf">
                <Cv />
            </div>
            <div className="allCertifs">
                <Certif />
            </div>
        </div>
    )
}

export default About