const FeaturedProj = ({featured}) => {
    return (
        <div className="featured-proj">
            <div className="featured-proj-img">
                <a href={featured.url}> <img className="featured-proj-banner" src={featured.banner} alt={featured.alt}/> </a>
                <a href={featured.url}>
                    <img className="featured-proj-arrow" src={featured.arrow} alt=""/>
                </a>
            </div>
            <div><a className="featured-proj-name" href={featured.url}> {featured.name} </a></div>
            <div className="featured-proj-skills" href={featured.url}> {featured.skills}</div>
            <div><a className="featured-proj-description" href={featured.url}> {featured.description} </a></div>

        </div>
    )
}

export default FeaturedProj
