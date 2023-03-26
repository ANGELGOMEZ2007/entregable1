import './App.css'
import ButtonPhrases from './components/ButtonPhrases'
import quotes from './utils/quotes.json'
import getRandomPhrases from "./utils/phrasesRandom"
import { useState } from "react"

const imgs = [1, 2, 3, 4];

function App() {

const [numberImg, setNumberImg] = useState(getRandomPhrases(imgs))

const appStyle = {
  backgroundImage: `url('/backgrounds/fondo${numberImg}.jpg')`
}


  return (

    <div style={appStyle} className="App">
      <div className="container">
        <div className="text__title">
          <h1>GALLETAS DE LA FORTUNA</h1>
        </div>
        <div className="box__all">
          <ButtonPhrases phrases={quotes} setNumberImg={setNumberImg} />
        </div>
      </div>
    </div>
  )
}

export default App
