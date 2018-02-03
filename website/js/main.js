var current = 0;
var options = [];

function nextQuestion() {
    if (current <= poll.length - 1) {
        document.getElementById("question").innerHTML = poll[current].question;

        current += 1;
    }
}