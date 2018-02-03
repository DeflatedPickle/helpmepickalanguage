var current = 0;
var options = [];

function nextQuestion() {
        updateQuestion();
        current += 1;
}

function updateQuestion() {
    if (current <= poll.length - 1) {
        var answers = document.getElementById("answers");
        document.getElementById("question").innerHTML = (current + 1) + ". " + poll[current].question;
        answers.innerHTML = "";

        poll[current].answers.forEach(function (item) {
            var div = document.createElement("div");

            var li = document.createElement("li");
            answers.appendChild(li);

            var button = document.createElement("input");
            button.type = poll[current].type;
            button.value = item;
            button.name = "answer";
            div.appendChild(button);

            var label = document.createElement("label");
            label.innerHTML = item;
            div.appendChild(label);

            li.appendChild(div);
        });
    }
}