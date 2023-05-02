import pdf from "/pdf/Lysie_Soyez_cv.pdf";
import cvImg from "/images/Lysie_Soyez_cv.jpg"

function Cv (){
    return(
        <>
            <a href={pdf} download >
                <img src={cvImg} alt="Cv Lysie Soyez" id="cvImg" />
            </a>
            <a href={pdf} download >
                Télécharger mon cv
            </a>
        </>
    )
};

export default Cv