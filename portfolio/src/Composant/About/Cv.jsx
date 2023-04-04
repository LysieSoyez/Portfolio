import pdf from "/pdf/Lysie_Soyez_cv.pdf";

function Cv (){
    return(
        <>
            <a href={pdf} download className="cvPdf">
                Télécharger mon cv
            </a>
        </>
    )
};

export default Cv