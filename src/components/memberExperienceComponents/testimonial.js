
const Testimonial = ({color, wave, background, quote, image, alt, name, role}) => {

    return (
        <div className="testimonial" style={{backgroundColor: background}}>
            <p className="testimonial-quote"> {quote} </p>
            <img className="testimonial-img" src={image} alt={alt}/>
            <div className="testimonial-name"> {name} </div>
            <div className="testimonial-role"> {role} </div>
            <img className="testimonial-wave" src={wave}/>
        </div>
    )
}

export default Testimonial