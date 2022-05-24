//main 8 ball logic

function getNewAnswer() {

    var randomNumber = Math.floor(Math.random() * 8);

    switch (randomNumber) {
        case 0:
            return "It is certain.";
        case 1:
            return 'It is decidedly so.';
        case 2:
            return 'Reply hazy, try again.';
        case 3:
            return 'Cannot be predicted now.';
        case 4:
            return 'Do not count on it.';
        case 5:
            return 'My sources say no.';
        case 6:
            return 'Not looking too great.';
        case 7:
            return 'All signs point to yes.';
    }
}

// interactivity

const form = document.getElementById("form");
const input = document.getElementById("input");
const answer = document.getElementById("answer");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userQuestion = input.value;

    if (userQuestion != "") {
        answer.innerHTML = getNewAnswer();
    } else {
        answer.innerHTML = "Inconclusive.";
    }
});