function Digits(props) {
    return (
            <button onClick={() => props.pushedButton(props.digit)}>{props.digit}</button>
    )
}

export default Digits