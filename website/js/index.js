var current = 0;
var options = [];

function nextQuestion() {
    if (current <= poll.length - 1) {
        var answers = document.getElementById("answers");
        document.getElementById("question").innerHTML = (current + 1) + ". " + poll[current].question;
        answers.innerHTML = "";

        poll[current].answers.forEach(function (item) {
            var li = document.createElement("li");
            answers.appendChild(li);

            li.appendChild(document.createTextNode(item));
        });

        current += 1;
    }
}