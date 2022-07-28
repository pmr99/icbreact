const FeaturedProj = ({banner, name, skills, description}) => {

    return (
        <div className="featured-proj">
            <div className="featured-proj-name"> {name} </div>
            <div className="featured-proj-skills"> {skills} </div>
            <div className="featured-proj-description"> {description} </div>

        </div>

    )
}

export default FeaturedProj