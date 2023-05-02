import { useState, useEffect } from "react";

function Certif(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('json/certifications.json')
        .then((response) => response.json())
        .then((json) => setData(json));
    }, []);

    return(
        <>
        {data.length ? data.map((certif) => (
            <>
            <h2>
                {certif.name}
            </h2>
            <iframe src={certif.image} width="800" height="600" align="middle" />
            </>
        )):null}
        </>
    )
}

export default Certif