import React, { useState, useEffect } from 'react';

function CarteGroup(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('json/projectGroup.json')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className='all_cards'>
      {data.length ? data.map((project) => (
        <>
          <h3>
            {project.titre}
          </h3>
          <div className='one_card'key={project.key}>
            <div className="image" >
              <img
              src={project.image}
              alt="#"
              id={project.imageId}
              />
            </div>
            <div className="description">
              <ul>
                <li className='tech'>
                  {project.tech}
                </li>
                {project.lienGit && (
                  <li>
                    <a href={project.lienGit} target="_blank">
                      {project.gitTexte}
                    </a>
                  </li>
                )}
                {project.lienAutre && (
                  <li>
                    <a href={project.lienAutre} target="_blank">
                      {project.autreTexte}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </>
      )) : null}
    </div>
  );
}

export default CarteGroup;

/* Props dans le json
**
** project.titre       -> Titre du project
** project.image       -> Apperçu de l'image
** project.imageId     -> Id de l'image
**
** project.lienGit     -> Lien du répo GitHub
** project.lienAutre   -> Lien du site
*/