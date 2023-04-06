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
        </div>
    )
}
export default Projects;