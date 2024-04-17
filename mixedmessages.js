function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateMessage() {
    const subjects = ["Life", "Your journey", "Success"];
    const actions = ["is about", "begins with", "depends on"];
    const outcomes = ["learning.", "courage.", "perseverance."];

    const randomSubject = getRandomElement(subjects);
    const randomAction = getRandomElement(actions);
    const randomOutcome = getRandomElement(outcomes);

    return `${randomSubject} ${randomAction} ${randomOutcome}`;
}

console.log(generateMessage());