const getRandomPhrases = (arr) => {
    const phrasesRandom = Math.floor(Math.random() * arr.length)
    return arr[phrasesRandom]
  }

export default getRandomPhrases