import React, { useState, useEffect } from 'react';

function Carte(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/project.json')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className='all_cards'>
      {data.length ? data.map((project) => (
        <div className='one_card'key={project.key}>
          <h3>
            {project.titre}
          </h3>
          <div className="image" >
            <img
            src={project.image}
            alt="#"
            id={project.imageId}
            />
          </div>
          <div className="description">
            <ul>
              <li>
                <a href={project.lienGit}>
                  {project.gitTexte}
                </a>
              </li>
              <li>
                <a href={project.lienAutre}>
                  {project.autreTexte}
                </a>
              </li>
            </ul>
          </div>
        </div>
      )) : null}
    </div>
  );
}

export default Carte;

/* Props dans le json
**
** project.titre       -> Titre du project
** project.image       -> Apperçu de l'image
** project.imageId     -> Id de l'image
**
** project.lienGit     -> Lien du répo GitHub
** project.lienAutre   -> Lien du site
*/