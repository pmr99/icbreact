const RecruitmentTimeline= (props) => {

    return (
        <div className = "Recruitment-timeline-indiv">
            <p> {props.number}</p>
            <p> {props.phase} </p>
            <p> {props.dates} </p>
            <p> {props.descrip} </p>
            <p> {props.extraInfo} </p>
        </div>

    )
}

export default RecruitmentTimeline