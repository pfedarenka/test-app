const COUNT_OF_ANSWERS = 4;

const getProbablyAnswers = (breedNames): string[] => {
  const probablyAnswers: string[] = [];
  while (probablyAnswers.length < COUNT_OF_ANSWERS) {
    const random = Math.floor(Math.random() * breedNames.length);
    if (probablyAnswers.indexOf(breedNames[random].toLowerCase()) === -1) {
      probablyAnswers.push(breedNames[random].toLowerCase());
    }
  }
  return probablyAnswers;
};

export default getProbablyAnswers;
