import "./projtemplate.css"

const Projtemplate = (props) => {
    return (
        <div>
            <div className = "proj-header-container">
                <img className = "proj-header-left" src = {props.img}/>
                <div className = "proj-header-right">
                    <h1 className = "title-text-1"> {props.name}</h1>
                    <h2 style = {{textAlign : "center"}}> {props.subtitle}</h2>
                    <div className = "proj-header-sub-container">
                        <div className = "proj-header-sub-left-container">
                            <p classname = "basic-text"> Duration</p>
                            <p classname = "basic-text">  Focus</p>
                            <p classname = "basic-text"> Tools</p>
                            <p classname = "basic-text"> Partner </p>
                        </div>
                        <div className = "proj-header-sub-right-container">
                            <p classname = "basic-text"> {props.duration}</p>
                            <p classname = "basic-text"> {props.focus}</p>
                            <p classname = "basic-text"> {props.tools}</p>
                            <p classname = "basic-text"> {props.partner}</p>
                        </div>
                    </div>

                </div>
            </div>
            <h1> Team</h1>
            <div className = "indiv-member-container"> 
            {props.team.map( (team)=> {
                return (
                    <div> 
                        <img className = "indiv-member" src = {team.pic}/>
                        <p className = "teamname">{team.name} </p>
                        <p className = "teamname">{team.role} </p>
                        </div>
                )

                }
            )
            }
            </div>
        
            <div className = "proj-team-container">
            </div>
            <h1> Overview</h1>
            <p> {props.background}</p> 

            <h1> Partner </h1>
            <p> {props.partnertext} </p>

            <h1> Deliverable</h1>
            <p> {props.deliverable} </p>
            
            <div className = "proj-research-overall-container">
                <div className = "proj-research-container">
                    <img src = {props.research1img}/>
                    <p style = {{textAlign: "center"}}> Qualitative </p>
                    <p style = {{textAlign: "center"}}> {props.research1text}</p>
                </div>

                <div className = "proj-research-container">
                    <img src = {props.research2img}/>
                    <p style = {{textAlign: "center"}}> Quantitative </p>
                    <p style = {{textAlign: "center"}}> {props.research2text}</p>
                </div>

            </div>
            

            <div className = "proj-deliverable-container">
                <img className = "proj-header-left" src = {props.deliverablepic1}/>
                <div className = "proj-header-right">
                    <p className = "content-text"> {props.deliverablesubtitle1} </p>
                    <p className = "content-text"> {props.deliverablecontent1} </p>
                </div>
            </div>

            <div className = "proj-deliverable-container-rev">
            <img className = "proj-header-left" src = {props.deliverablepic2}/>
                <div className = "proj-header-right">
                    <p className = "content-text"> {props.deliverablesubtitle2} </p>
                    <p className = "content-text"> {props.deliverablecontent2} </p>
                </div>
            </div>

            <div className = "proj-deliverable-container">
                <img className = "proj-header-left" src = {props.deliverablepic3}/>
                <div className = "proj-header-right">
                    <p className = "content-text"> {props.deliverablesubtitle3} </p>
                    <p className = "content-text"> {props.deliverablecontent3} </p>
                </div>
            </div>
        </div>
    )
}

export default Projtemplate