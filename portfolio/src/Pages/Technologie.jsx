import Technobase from "../Composant/Technologies/TechnoBases";
import TechnoUtil from "../Composant/Technologies/TechnoUtil";


function Technologie(){
    return(
        <div id="Technologie">
          <h2>
            Language utilisé:
          </h2>
          <Technobase img="/images/icons/html-5.png" 
            tech={[
              {img: '/images/icons/html-5.png', title: 'HTML'},
              {img: '/images/icons/css-3.png', title: 'CSS'},
              {img: '/images/icons/sass.png', title: 'SASS'},
              {img: '/images/icons/js.png', title: 'JavaScript'},
              {img: 'images/icons/github.png', title: 'Git'},
          ]}  />
          <hr />
          <div className="frameBase">
            <div className="frameworks">
              <h2>
                Frameworks :
              </h2>
              <TechnoUtil image="/images/icons/React.png" title="React" 
              projects={[
                {name: 'Cogip ', desc:"(Website)", link: 'https://cogip-3ubzgqgdi-ed0598.vercel.app/'},
                {name: 'Portfolio ', desc:"(GitHub)", link: 'https://github.com/LysieSoyez/Portfolio'},
              ]}  />
              <hr />
            </div>
            <div className=" connaissance">
              <h2>
                Connaissance de base:
              </h2>
              <TechnoUtil image="/images/icons/php.png" title="PHP/SQL" 
              projects={[
                {name: 'Hackers Poulette ', desc:"(GitHub)", link: 'https://github.com/LysieSoyez/hackers-poulette'},
              ]}  />
            </div>
          </div>
        </div >
    )
}
export default Technologie;