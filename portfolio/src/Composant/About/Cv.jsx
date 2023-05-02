import pdf from "/pdf/Lysie_Soyez_cv.pdf";

function Cv (){
    return(
        <>
            <a href={pdf} download >
                Télécharger mon cv
            </a>
        </>
    )
};

export default Cv