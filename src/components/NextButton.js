import "./Button.css"

const NextButton = props => {
    return (
        <div className="button-container">
            <div className="button" onClick={() => props.onClick()}>
                <div className="next">Next</div>
                <div className="arrow">→</div>
            </div>
        </div>
    )
}

export default NextButton;