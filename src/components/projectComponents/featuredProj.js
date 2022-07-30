import ProjectArrow from "../../assets/projects-arrow.png"


const FeaturedProj = ({banner, alt, name, skills, description, url}) => {
    return (
        <div className="featured-proj">
            <div className="featured-proj-img">
                <img className="featured-proj-banner" src={banner} alt={alt}/>
                <a href={url}>
                    <img className="featured-proj-arrow" src={ProjectArrow}/>
                </a>
            </div>
            <div className="featured-proj-name"> {name} </div>
            <div className="featured-proj-skills"> {skills} </div>
            <div className="featured-proj-description"> {description} </div>

        </div>

    )
}

export default FeaturedProj