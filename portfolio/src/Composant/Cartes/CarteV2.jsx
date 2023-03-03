import React, { useState, useEffect } from 'react';

function CarteV2(props) {
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
            <ul>
              <li>
                <a href={project.lienGit}>
                  <img src="/images/github_white.png" alt="Repos git hub" id="git" />
                </a>
              </li>
              <li>
                <a href={project.lienAutre}>
                  <img src="/images/page-web_white.png" alt="Lien externe" id="lien" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )) : null}
    </div>
  );
}

export default CarteV2;