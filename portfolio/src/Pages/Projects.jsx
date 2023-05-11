import CarteCertif from '../Composant/Cartes/CarteCertif';
import CarteGroup from '../Composant/Cartes/CarteGroup';
import CarteSolo from '../Composant/Cartes/CarteSolo';

function Projects(){
    return(
        <div className='project'>
            <h2>
                Solo Projects :
            </h2>
            <CarteSolo />
            <h2>
                Group Projects :
            </h2>
            <CarteGroup />
            <h2>
                <CarteCertif titre="Personas"
                slide={[
                    {image: "/images/certifs/Persona1.jpg", id: "persona1"},
                    {image: "/images/certifs/Persona2.jpg", id:"persona2"}
                 ]} />
            </h2>
        </div>
    )
}
export default Projects;