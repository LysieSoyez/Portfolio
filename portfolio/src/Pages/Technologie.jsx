import Technobase from "../Composant/Technologies/TechnoBases";
import TechnoUtil from "../Composant/Technologies/TechnoUtil";


function Technologie(){
    return(
        <div id="Technologie">
        <h2>
          Language utilisé:
        </h2>
        <Technobase img="public/images/html-5.png" 
        tech={[
          {img: '/images/html-5.png', title: 'HTML'},
          {img: '/images/css-3.png', title: 'CSS'},
          {img: '/images/sass.png', title: 'SASS'},
          {img: '/images/js.png', title: 'JavaScript'},
        ]}  />
        <hr />
        <h2>
          Frameworks :
        </h2>
        <TechnoUtil image="/images/React.png" title="React" 
        projects={[
          {name: 'Cogip (Lien du site)', link: 'http://project1.com'},
          {name: 'Portfolio (Lien du GitHub)', link: 'http://project2.com'},
        ]}  />
        <hr />
        <h4>
          Connaissance de base:
        </h4>
        <TechnoUtil image="/images/React.png" title="PHP/SQL" 
        projects={[
          {name: 'Hackers Poulette (Lien du GitHub)', link: 'http://project1.com'},
        ]}  />
        </div >
    )
}
export default Technologie;