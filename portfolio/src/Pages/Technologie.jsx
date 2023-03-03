import Technobase from "../Composant/Technologies/TechnoBases";
import TechnoUtil from "../Composant/Technologies/TechnoUtil";


function Technologie(){
    return(
        <>
        <h2>
          Language utilisé:
        </h2>
        <Technobase img="public/images/html-5.png" 
        tech={[
          {img: 'public/images/html-5.png', title: 'HTML'},
          {img: 'public/images/html-5.png', title: 'HTML'},
        ]}  />
        <hr />
        <h2>
          Frameworks :
        </h2>
        <TechnoUtil image="public/images/React.png" title="React" 
        projects={[
          {name: 'Cogip (Lien du site)', link: 'http://project1.com'},
          {name: 'Portfolio (Lien du GitHub)', link: 'http://project2.com'},
        ]}  />
        <hr />
        <h4>
          Connaissance de base:
        </h4>
        <TechnoUtil image="public/images/React.png" title="PHP/SQL" 
        projects={[
          {name: 'Hackers Poulette (Lien du GitHub)', link: 'http://project1.com'},
        ]}  />
        </>
    )
}
export default Technologie;