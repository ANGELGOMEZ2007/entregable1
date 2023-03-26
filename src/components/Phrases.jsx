
const Phrases = ({ props }) => {
    const { author, phrase } = props


    return (
        <div className="box__info">
            <div className="text__phrase">
                <p>{phrase}</p>
                <p><i>"{author}"</i></p>
            </div>
        </div>
    )
}

export default Phrases 