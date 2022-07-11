const WorkshopFAQs= (props) => {

    return (
        <div className = "Workshop-faqs-indiv">
            <p> {props.question}</p>
            <p> {props.icon} </p>
            <p> {props.shape} </p>
        </div>

    )
}

export default WorkshopFAQs