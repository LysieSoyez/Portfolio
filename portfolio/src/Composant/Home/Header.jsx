import DarkMode from "../Mode/DarkMode";



function Header(){
    return(
        <>
        <div className="header">
            <DarkMode />
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