

function TechnoUtil(props){
    return(
        <>
        <div className="title">
            <img src={props.image} />
            <h3>
                {props.title}
            </h3>
        </div>
        <ul className="ulProjects">
            {props.projects.map((project, index) => (
                <li key={index}>
                    <a href={project.link}>
                        {project.name}
                    </a>
                    {project.desc}
                </li>
            ))}
        </ul>
        </>
    )
}

export default TechnoUtil;

/* Props 
**
** props.image     -> Image de la techno utilisée
** props.title    -> Titre de la techno
**
** props.project  -> Props de la boucle
** project.link   -> Lien du répo, du site
** project.name   -> Nom du répo, du site
*/