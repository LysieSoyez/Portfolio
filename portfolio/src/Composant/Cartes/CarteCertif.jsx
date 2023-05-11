import React, { useState, useEffect } from 'react';

function CarteCertif(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('json/certifProjects.json')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className='all_cards'>
      {data.length ? data.map((certif) => (
        <>
          <h3>
            {props.titre}
          </h3>
          <div className='one_card'key={certif.key}>
            <div className="image" >
                {props.slide.map((certif) => (
                    <img
                    src={certif.image}
                    alt="#"
                    id={certif.id} />
                ))}
            </div>
            <div className="description">
                <p>
                    {certif.description}
                </p>
            </div>
          </div>
        </>
      )) : null}
    </div>
  );
}

export default CarteCertif;