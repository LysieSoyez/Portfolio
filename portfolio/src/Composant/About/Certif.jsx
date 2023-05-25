import { useState, useEffect } from "react";

function Certif() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('public/json/certifications.json')
        .then((response) => response.json())
        .then((json) => setData(json));
    }, []);

    return(
        <>
        {data.length ? data.map((certif) => (
            <div className="oneCertif">
                <h2>
                    {certif.name}
                </h2>
                <a href={certif.image} target="_blank">
                    <img src={certif.image} alt="#" id={certif.imageId} />
                </a>
            </div>
            )):null}
        </>
    )
}

export default Certif