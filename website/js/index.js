var current = 0;
var options = [];

function nextQuestion() {
    if (current <= poll.length - 1) {
        var answers = document.getElementById("answers");
        document.getElementById("question").innerHTML = poll[current].question;
        removeChildren(answers);

        poll[current].answers.forEach(function (item) {
            var li = document.createElement("li");
            answers.appendChild(li);

            li.appendChild(document.createTextNode(item));
        });

        current += 1;
    }
}

function removeChildren(list) {
    list.childNodes.forEach(function (item) {
        list.removeChild(item);
    });
}