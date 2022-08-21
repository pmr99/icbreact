const CoreValueBox = ({text, color}) => {
    return (
        <div className='coreValues_box' style={{borderColor: color}}>
            <div className="coreValue">
                <p style={{color}}>
                {text}
                </p>
            </div>
        </div>
    )
  }
  
  export default CoreValueBox