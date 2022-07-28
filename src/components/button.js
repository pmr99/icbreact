const Button = (props) => {

    return (
        <div className={props.size}>
            <p>{props.action}</p>
        </div>

    )
}

export default Button