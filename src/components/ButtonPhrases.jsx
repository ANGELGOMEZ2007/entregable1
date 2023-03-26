import { useState } from "react"
import getRandomPhrases from "../utils/phrasesRandom"
import Phrases from "./Phrases"
const ButtonPhrases = ({ phrases, setNumberImg }) => {
  const [phrase, setPhrase] = useState(getRandomPhrases(phrases))

  const handlePhrase = () => {
    setPhrase(getRandomPhrases(phrases))
    setNumberImg(getRandomPhrases([1, 2, 3, 4]))
  }

  return (
    <>
      <Phrases props={phrase} />
      <div className="box__button">
        <button className="button" onClick={handlePhrase}>Ver otro</button>
      </div>


    </>
  )
}

export default ButtonPhrases