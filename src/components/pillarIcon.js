const PillarIcon = ({image, label}) => {
  return (
    <div className="icon_box">
    <img className="icons" src={image} alt="ICB Pillar Icon" />
    <div className="icon_text">{label}</div>
    </div>
    
  )
}

export default PillarIcon