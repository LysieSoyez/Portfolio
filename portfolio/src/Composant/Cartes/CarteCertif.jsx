import React, { useState, useEffect } from 'react';

function CarteCertif() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('public/json/certifProjects.json')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className='all_cards'>
      {data.length ? data.map((certif) => (
        <>
          <h3>
            {certif.title}
          </h3>
          <div className='one_card'key={certif.key}>
            <div className="imageCertif">
              {certif.image.map((imageUrl) => (
                <img src={imageUrl} />
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