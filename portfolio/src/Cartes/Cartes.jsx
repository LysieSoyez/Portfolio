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
        <div className="one_card" key={project.key}>
          <img
            src={project.image}
            alt="#"
            id={project.imageId}
          />
          <div className="description">
            <p>{project.description}</p>
            <ul>
              <li>
                <a href={project.lienGit}>
                  <img src="/images/github.png" alt="Repos git hub" id="git" />
                </a>
              </li>
              <li>
                <a href={project.lienAutre}>
                  <img src="/images/page-web.png" alt="Lien externe" id="lien" />
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
