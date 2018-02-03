var current = 0;
var options = [];

function nextQuestion() {
    if (current >= poll.length) {
        finishQuestions();
    }

    if (checkButtons() != "" || current === 0) {
        if (current > 0 && current <= poll.length) {
            console.log("Buttons:", checkButtons());

            if (checkButtons() !== "---") {
                options.push(checkButtons());
            }
        }

        updateQuestion();
        current += 1;

        console.log(current, options, poll.length);
    }
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

function checkButtons() {
    var buttons = document.getElementsByName("answer");

    var values = [];

    buttons.forEach(function (item) {
        if (item.checked) {
            if (item.value == "Yes") {
                values.push(poll[current - 1].mask_answers[0]);
            } else if (item.value != "No") {
                values.push(item.value);
            } else {
                values.push("---");
            }
        }
    });

    return values.join(", ");
}

function finishQuestions() {
    removeElements();

    var title = document.createElement("h3");
    title.innerHTML = "Your next language could be:";
    document.body.appendChild(title);

    var list = document.createElement("ul");
    document.body.appendChild(list);
}

function removeElements() {
    var question = document.getElementById("question");
    var answers = document.getElementById("answers");
    var button = document.getElementById("button");

    question.parentNode.removeChild(question);
    answers.parentNode.removeChild(answers);
    button.parentNode.removeChild(button);
}