
const Testimonial = ({testimonial}) => {

    return (
        <div className="testimonial">
            <img className="testimonial-bg" src={testimonial.wave}/>
            <p className="testimonial-quote"> {testimonial.quote} </p>
            <img className="testimonial-img" src={testimonial.image} alt={testimonial.alt}/>
            <div className="testimonial-name"> {testimonial.name} </div>
            <div className="testimonial-role"> {testimonial.role} </div>
        </div>
    )
}

export default Testimonial