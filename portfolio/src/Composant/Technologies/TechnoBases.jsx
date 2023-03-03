

function Technobase(props){
    return(
        <div className="techbase">
            {props.tech.map((base, index) => (
                <div key={index}>
                    <img src={base.img} />
                    <p>
                        {base.title}
                    </p>
                </div>
            ))}
        </div>
    )
}


export default Technobase;