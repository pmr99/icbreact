import Projcontent from "../../components/projectComponents/projcontent"
import Projtemplate from "../../components/projectComponents/projtemplate"



const Philz = () => {
    const content = Projcontent.content.philz
    return(
        

        <div>
            {console.log(content)}

            <Projtemplate name = {content.name} 
            subtitle = {content.subtitle}
            duration = {content.duration}
            img = {content.img} 
            focus = {content.focus}
            tools = {content.tools}
            partner = {content.partner}
            team = {content.team}
            background = {content.background}
            partnertext = {content.partnertext}
            deliverable = {content.deliberable}
            research1img = {content.research1img}
            research1text={content.research1text}
            research2img = {content.research2img}
            research2text={content.research2text}
            deliverableheader = {content.deliverableheader}
            deliverablesubtitle1 = {content.deliverablesubtitle1}
            deliverablecontent1 = {content.deliverablecontent1}
            deliverablepic1 = {content.deliverablepic1}

            deliverablesubtitle2 = {content.deliverablesubtitle2}
            deliverablecontent2 = {content.deliverablecontent2}
            deliverablepic2 = {content.deliverablepic2}

            deliverablesubtitle3 = {content.deliverablesubtitle3}
            deliverablecontent3 = {content.deliverablecontent3}
            deliverablepic3 = {content.deliverablepic3}


            />
        </div>
    )
    
}
export default Philz