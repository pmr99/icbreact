

const Projtemplate = (props) => {
    return (
        <div>
            <div className = "proj-header-container">
                <img className = "proj-header-left" src = {props.img}/>
                <div className = "proj-header-right">
                    <h1 > {props.name}</h1>
                    <h2> {props.subtitle}</h2>
                    <p> Duration</p>
                    <p> {props.duration}</p>
                    <p> Focus</p>
                    <p> {props.focus}</p>
                    <p> Tools</p>
                    <p> {props.tools}</p>
                    <p> Partner </p>
                    <p> {props.partner}</p>
                </div>
            </div>
            <h1> Team</h1>
            <div className = "proj-team-container">
            </div>
            <h1> Team</h1>
            <p> {props.background}</p> 

            <h1> Partner </h1>
            <p> {props.partnertext} </p>

            <h1> Deliverable</h1>
            <p> {props.deliverable} </p>
            
            <div className = "proj-research-overall-container">
                <div className = "proj-research-container">
                    <img src = {props.research1img}/>
                    <p> {props.research1text}</p>
                </div>

                <div className = "proj-research-container">
                    <img src = {props.research2img}/>
                    <p> {props.research2text}</p>
                </div>


            </div>
            

            <div className = "proj-deliverable-container">
                <img className = "proj-header-left" src = {props.deliverablepic1}/>
                <div className = "proj-header-right">
                    <p> {props.deliverablesubtitle1} </p>
                    <p> {props.deliverablecontent1} </p>
                </div>
            </div>

            <div className = "proj-deliverable-container">
                <img className = "proj-header-left" src = {props.deliverablepic2}/>
                <div className = "proj-header-right">
                    <p> {props.deliverablesubtitle2} </p>
                    <p> {props.deliverablecontent2} </p>
                </div>
            </div>

            <div className = "proj-deliverable-container">
                <img className = "proj-header-left" src = {props.deliverablepic3}/>
                <div className = "proj-header-right">
                    <p> {props.deliverablesubtitle3} </p>
                    <p> {props.deliverablecontent3} </p>
                </div>
            </div>
        </div>
    )
}

export default Projtemplate