import "./Button.css"

const NextButton = props => {
    return (
        <div className="button-container">
            <div className="buttonPrize" onClick={() => props.onClick()}>
                <div className="next">click to claim your prize!</div>
            </div>
        </div>
    )
}

export default NextButton;