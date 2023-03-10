import Carte from '../Composant/Cartes/Carte';

function Projects(){
    return(
        <div className='project'>
            <h2>
                Solo Projects :
            </h2>
            <Carte />
            <h2>
                Group Projects :
            </h2>
            <Carte />
        </div>
    )
}
export default Projects;