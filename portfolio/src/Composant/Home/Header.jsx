import DarkMode from "../Mode/DarkMode";
import WtfMode from "../Mode/WtfMode";



function Header(){
    return(
        <>
        <div className="header">
            <div className="ModeButton">
                <DarkMode />
                <WtfMode />
            </div>
            <h1>
                Lysie Soyez
            </h1>
            <img src="/images/Profil.jpg" alt="Photo de profil" />
            <p>
                Junior Front-End Developer. 
            </p>
        </div>
        </>
    )
}

export default Header;