import ProjectArrow from "../../assets/projects-arrow.png"


const FeaturedProj = ({featured}) => {
    return (
        <div className="featured-proj">
            <div className="featured-proj-img">
                <img className="featured-proj-banner" src={featured.banner} alt={featured.alt}/>
                <a href={featured.url}>
                    <img className="featured-proj-arrow" src={ProjectArrow} alt=""/>
                </a>
            </div>
            <div className="featured-proj-name"> {featured.name} </div>
            <div className="featured-proj-skills"> {featured.skills} </div>
            <div className="featured-proj-description"> {featured.description} </div>

        </div>

    )
}

export default FeaturedProj
